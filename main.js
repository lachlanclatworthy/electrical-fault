/* main.js */

const { app, BrowserWindow } = require('electron');

console.log("Hello from Svalbard ^___^");

const createWindow = () => {
    const win = new BrowserWindow({
        width: 1200,
        height: 800
    });

    win.loadFile('index.html');
};

app.whenReady().then(() => {
    createWindow();

    // Handle the case where the app is running in the background
    // but the original window was closed
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
});
