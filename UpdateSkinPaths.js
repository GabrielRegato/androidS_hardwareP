const fs = require("fs");
const path = require("path");
const os = require("os");

const xmlDirectory = __dirname;
const userHome = process.env.HOME || process.env.USERPROFILE;

// Determine the operating system
const platform = os.platform();
let baseSkinPath = "";

if (platform === "win32") {
  console.log("Running on Windows");
  baseSkinPath = path.join(
    userHome,
    "AppData",
    "Local",
    "Android",
    "Sdk",
    "skins"
  );
} else if (platform === "darwin") {
  console.log("Running on macOS");
  baseSkinPath = path.join(userHome, "Library", "Android", "sdk", "skins");
}

fs.readdir(xmlDirectory, (err, files) => {
  if (err) throw err;

  files.forEach((file) => {
    if (path.extname(file) === ".xml") {
      const xmlFile = path.join(xmlDirectory, file);
      const deviceName = path.basename(file, ".xml");

      // Construct the new skin path by joining the base path with the device name
      const newSkinPath = path.join(baseSkinPath, deviceName);
      fs.readFile(xmlFile, "utf8", (err, data) => {
        if (err) throw err;

        const updatedData = data.replace(
          /<d:skin>.*?<\/d:skin>/,
          `<d:skin>${newSkinPath}</d:skin>`
        );

        fs.writeFile(xmlFile, updatedData, "utf8", (err) => {
          if (err) throw err;
          console.log(`Updated skin path in: ${xmlFile}`);
        });
      });
    }
  });
});
