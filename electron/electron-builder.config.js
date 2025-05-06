
module.exports = {
  appId: "com.terraview.navigator",
  productName: "Terra View Navigator",
  directories: {
    output: "dist-electron"
  },
  files: [
    "dist/**/*",
    "electron/**/*"
  ],
  linux: {
    target: ["deb", "AppImage"],
    category: "Science",
    icon: "public/favicon.ico"
  },
  publish: null
};
