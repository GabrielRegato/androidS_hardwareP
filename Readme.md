# Android Studio Hardware Profiles Ready2Go

## Description

This project provides a collection of XML files containing various hardware profiles for Android Studio. The profiles can be easily imported into Android Studio, allowing developers to quickly set up different virtual device configurations for testing and development.

## Getting Started

### Prerequisites

- Android Studio Previous Installed
- Node.js (version 12.x.x or higher)
- npm (version 6.0.0 or higher)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/GabrielRegato/androidS_hardwareP.git
```

2. Navigate to the project directory:

```bash
cd androidS_hardwareP
```

3. Run the provided Node.js script to set up the skins folder in the correct path.

```bash
node UpdateSkinPaths.js
```

4. Import the XML files into Android Studio to begin using the hardware profiles. Below is a step-by-step guide to help you through the process.

### Importing Hardware Profiles into Android Studio

To import the hardware profiles into Android Studio, follow these steps:

1. **Open Android Studio**:

- Launch Android Studio on your machine.

2. **Access the AVD Manager**:

- Click on the "Tools" menu in the top navigation bar.
- Select "AVD Manager" from the dropdown menu. This will open the Android Virtual Device Manager.

3. **Import the XML Files**:

- To import your custom hardware profile, navigate to the **"Select Hardware"** section in Android Studio.
- Click the **"Import Hardware Profile"** button located next to **"New Hardware Profile."** Then, browse to the location where you cloned the repository and locate the **androidS_hardwareP** folder, which contains the XML files you need to import.
- Select the desired XML file(s) and click "Open" to complete the import process.

4. **Selecting a Virtual Device from Imported Hardware Profiles**:

- In the AVD Manager, after importing the XML files, you will see a list of new devices.
- Choose a device category (e.g., Phone, Tablet, etc.) and select a device model from the list of devices you imported in the previous step.
- Click "Next" to proceed.

5. **Select a System Image**:

- Choose a system image for the virtual device. You can select from the available options or download a new one if needed.
- Click "Next".

6. **Configure the Hardware Profile**:

- In the **"Verify Configuration"** screen:

  - Enter the AVD name for the device.

  - The imported device profile is already set up correctly, so customization is not necessary.

  - If you wish to adjust settings, click on **"Show Advanced Settings"** to modify options such as RAM, VM heap, and more.

  - Click "Finish" to create the virtual device.

    7.- **Launch the Virtual Device**:

- Back in the AVD Manager, you should see your newly created virtual device listed.
- Click the "Play" button (green triangle) next to the device to launch it.
- Now you can start using the imported hardware profile in your Android development projects!

## Features

- **Dynamic Hardware Profiles**: A variety of pre-configured hardware profiles in XML format for different device specifications.

- **Easy Import**: Simply import the XML files into Android Studio to load the hardware profiles automatically.

- **Custom Node Script**: A Node.js script is included to change the path of the skins and copy the skins folder to the correct location in your Android SDK, ensuring a smooth setup process.

- **Modular Structure**: The project is organized for easy navigation and maintenance, making it simple to add or modify hardware profiles as needed.

## List of Devices

| Device Name      | Resolution  |
| ---------------- | ----------- |
| Galaxy S10 Plus  | 3040 x 1440 |
| Galaxy S20       | 3200 x 1440 |
| Galaxy S20 FE    | 2400 x 1080 |
| Galaxy S20 Plus  | 3200 x 1440 |
| Galaxy S20 Ultra | 3200 x 1440 |
| Galaxy S21       | 2400 x 1080 |
| Galaxy S21 FE    | 2400 x 1080 |
| Galaxy S21 Plus  | 2400 x 1080 |
| Galaxy S21 Ultra | 3200 x 1440 |
| Galaxy S22       | 2340 x 1080 |
| Galaxy S22 Plus  | 2340 x 1080 |
| Galaxy S22 Ultra | 3088 x 1440 |
| Galaxy S23       | 2340 x 1080 |
| Galaxy S23 FE    | 2340 x 1080 |
| Galaxy S23 Plus  | 2340 x 1080 |
| Galaxy S23 Ultra | 3088 x 1440 |
| Galaxy S24       | 2340 x 1080 |
| Galaxy S24 FE    | 2340 x 1080 |
| Galaxy S24 Plus  | 2340 x 1080 |
| Galaxy S24 Ultra | 3088 x 1440 |
| Galaxy S25       | 2340 x 1080 |
| Galaxy S25 Plus  | 3120 x 1440 |
| Galaxy S25 Ultra | 3120 x 1440 |

## Disclaimer

This repository is provided "as is" and without warranty of any kind. Use at your own risk. While we hope this repository assists you in setting up and utilizing hardware profiles in Android Studio, you are responsible for modifying and adapting the XML files and scripts to suit your specific development needs.

You may enhance or change the profiles and configurations as necessary, but please be aware that we do not guarantee the accuracy, completeness, or reliability of the provided files or scripts. Always ensure that you back up your existing configurations before making any changes.

#### Android Studio Hardware Profiles Ready2Go - Gabriel A.R.
