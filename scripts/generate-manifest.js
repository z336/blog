import fs from "fs";
import path from "path";

const settingsPath = path.resolve("src/data/settings.json");
const settings = JSON.parse(fs.readFileSync(settingsPath, "utf-8"));

const manifest = {
  name: settings.name,
  short_name: settings.shortName,
  start_url: settings.start_url,
  scope: settings.scope,
  display: settings.display,
  description: settings.description,
  lang: settings.lang,
  background_color: settings.backgroundColor,
  theme_color: settings.themeColor,
  icons: settings.icons,
};

fs.writeFileSync(
  path.resolve("public/manifest.json"),
  JSON.stringify(manifest, null, 2),
);
console.log("✅ manifest.json generated from settings.json");
