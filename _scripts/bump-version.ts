import fs from "fs";
const pkgPath = "./package.json";
const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf8"));

const isDev = process.argv.includes("--dev");
const [major, minor, patchWithDev] = pkg.version.split(".");
let [patch, devBuild] = patchWithDev.split("-dev.");

patch = parseInt(patch);
devBuild = isDev ? parseInt(devBuild ?? "0") + 1 : 0;

if (isDev) {
  pkg.version = `${major}.${minor}.${patch}-dev.${devBuild}`;
} else {
  if (patch >= 99) {
    pkg.version = `${major}.${parseInt(minor) + 1}.0`;
  } else {
    pkg.version = `${major}.${minor}.${parseInt(patch) + 1}`;
  }
}

fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));
console.log(`🔖 New version: ${pkg.version}`);
