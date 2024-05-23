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
});
