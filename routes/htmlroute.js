const path = require("path");

module.exports = (app) => {
//when notes is called res file of notes.html 
    app.get("/notes", (req, res) => {
        res.sendFile(path.join(__dirname, "..notes.html"))
    });
//when index.js is called send index.js file
    app.get("/public/assets/js/index.js", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/assets/js/index.js"))
    });
//allows access to css file because it's public and static now
    app.get("/public/assets/css/styles.css", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/assets/css/styles.css"))
    });
//when star is put in then send back index.html file
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "..index.html"))
    });
}
