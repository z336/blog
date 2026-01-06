---
layout: ../../layouts/PostLayout.astro
title: "How to bind mount ZFS datasets in Linux containers (LXC)"
pubDate: 2026-01-05
update: 2026-01-06
category: "Article"
tags: ["proxmox", "linux containers", "zfs"]
lede:
  "This guide explains how to bind mount a ZFS dataset inside an unprivileged LXC container on Proxmox with full read and write privileges.
  This method allows multiple containers to share access to the same dataset with minimal complexity. It is ideal for shared media libraries or data pools that multiple services may access."
---

Unprivileged LXC containers map User Identifiers (UIDs) starting at `100000` on the host. To give the container access to a host dataset, the host user/group should have IDs in this range.

## Requirements

- A Proxmox host with ZFS storage configured
- At least one ZFS pool with a dataset
- At least one unprivileged LXC
- Root shell access to the Proxmox host

## Create a user on the host

Create a user on the host so you can map the dataset to the LXC. Create a group for the user, then create the user, and finally change the ownership of the dataset to the user.

<aside class="callout">
<p>This guide uses placeholders in <code>&lt;ALL_CAPS&gt;</code>. Before running the commands, choose names for your user and group and use them consistently throughout the guide. For example:</p>
<ul>
  <li><code>&lt;USER_NAME&gt;</code>: e.g., mediauser</li>
  <li><code>&lt;GROUP_NAME&gt;</code>: e.g., mediagroup</li>
  <li><code>&lt;LXC_ID&gt;</code>: Your container ID (e.g., 101)</li>
</ul>
</aside>

1. Create a group. Use Group ID (GID) `110000`, which maps to `10000` inside the LXC.

```shell
groupadd -g 110000 <GROUP_NAME>
```

2. Create a user and assign them to the group. Use UID `101000`, which maps to `1000` inside the LXC.

```shell
useradd <USER_NAME> -u 101000 -g 110000 -m -s /bin/bash
```

_Note: You may see a warning that the UID is outside the `UID_MIN/MAX` range; you can safely ignore this._

3. Change the ownership of the dataset to the user:

```shell
chown -R <USER_NAME>:<GROUP_NAME> /path/to/dataset
```

## Add the user to each LXC

You need to add a group and a user to each LXC that needs to access a dataset. The local group and user should align with the IDs you created on the host.

Log in to each LXC and run these commands:

1. Add the group. Use the GID `10000`. This aligns with the host GID `110000`.

```shell
groupadd -g 10000 <GROUP_NAME>
```

2. Add the user. Use the UID `1000` to align with the host user GID.

```shell
useradd <USER_NAME> -u 1000 -g 10000 -m -s /bin/bash
```

3. Shut down the LXC

```bash
shutdown -h now
```

## Bind mount the dataset to each LXC

Bind the mount points to the config file in each LXC. Replace `LXC_ID` with your container ID and define your paths.

From the Proxmox host shell, run these commands:

1. Bind the mount points:

```bash
pct set <LXC_ID> -mp0 /path/to/host/data,mp=/mnt/data,backup=0
```

2. Start the LXC:

```bash
pct start <LXC_ID>
```

## Verify access and permissions

Log back into the LXC and verify that the `<USER_NAME>` can create and delete files in the mount path:

```bash
su - <USER_NAME>
cd /mnt/data
touch test_file && rm test_file
```
