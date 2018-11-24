const {app,BrowserWindow}  = require("electron");


function createWindow(){

    let window = new BrowserWindow({height:600,width:500});

    window.loadFile("index.html");
};

//wait for app to start
app.on("ready",createWindow);


//close windows
app.on("window-all-closed",()=>{

        //on mac os
    if(process.platform !== "darwin" ){
        app.quit();
    }
});