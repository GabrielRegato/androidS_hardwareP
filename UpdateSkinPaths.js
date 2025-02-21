const fs = require("fs");
const path = require("path");
const os = require("os");

const xmlDirectory = __dirname;
const userHome = process.env.HOME || process.env.USERPROFILE;

// Determine the operating system
const platform = os.platform();
let baseSkinPath = "";

if (platform === "win32") {
  baseSkinPath = path.join(
    userHome,
    "AppData",
    "Local",
    "Android",
    "Sdk",
    "skins"
  );
} else if (platform === "darwin") {
  baseSkinPath = path.join(userHome, "Library", "Android", "sdk", "skins");
}

// Define the source skins directory
const skinsSourcePath = path.join(xmlDirectory, "skins");

// Function to copy files and directories
const copyDir = (sourceDir, destDir) => {
  fs.readdir(sourceDir, (err, items) => {
    if (err) throw err;

    // Create the destination directory if it doesn't exist
    fs.mkdir(destDir, { recursive: true }, (err) => {
      if (err) throw err;

      // Process each item in the source directory
      items.forEach((item) => {
        const sourceItem = path.join(sourceDir, item);
        const destItem = path.join(destDir, item);

        fs.stat(sourceItem, (err, stats) => {
          if (err) throw err;

          if (stats.isDirectory()) {
            // If the item is a directory, recursively copy it
            copyDir(sourceItem, destItem);
          } else {
            // If the item is a file, copy it
            fs.copyFile(sourceItem, destItem, (err) => {
              if (err) throw err;
              // console.log(`Copied file: ${sourceItem} to ${destItem}`);
            });
          }
        });
      });
    });
  });
};

// Copy skins from the source directory to the baseSkinPath
copyDir(skinsSourcePath, baseSkinPath);

// Read and update XML files
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
