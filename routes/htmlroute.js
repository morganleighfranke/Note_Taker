const path = require("path");

module.exports = (app) => {
    //Setting up the notes.html
    app.get("/notes", (req, res) => {
        res.sendFile(path.join(__dirname, "..notes.html"))
    });
    //Setting up the application code for the js client
    app.get("/public/assets/js/index.js", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/assets/js/index.js"))
    });
    //Setting up the css files
    app.get("/public/assets/css/styles.css", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/assets/css/styles.css"))
    });
    //Setting up the main/home index.html
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "..index.html"))
    });
}

// tolga's code to get path linked using /public/ alter to match your own