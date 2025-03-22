import fs from "fs";
import path from "path";

const pkgPath = path.join(process.cwd(), "package.json");
const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf-8"));

let [major, minor, patch] = pkg.version.split(".").map(Number);

if (patch >= 99) {
  minor += 1;
  patch = 0;
} else {
  patch += 1;
}

const newVersion = `${major}.${minor}.${patch}`;
pkg.version = newVersion;

fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));

console.log(`🔧 New version: ${newVersion}`);
