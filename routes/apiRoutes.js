const fs = require('fs');
//this is used to add a unique id to each note that is posted
const { v4: uuidv4 } = require('uuid');
uuidv4();

module.exports = (app) => {

    app.get('/api/notes', (req, res) => {
        console.log(res);
        fs.readFile("./db/db.json", "utf8", (err, data) => {
   
        if (err) {
            console.error(err);
        } else {
            res.json(JSON.parse(data));
        }
    })
});
    
app.post("/api/notes", (req, res) => {

    fs.readFile("./db/db.json", (err, data) => {

        req.body.id = uuidv4();
        let notesArray = JSON.parse(data);
        notesArray.push(req.body);

       
        fs.writeFile("./db/db.json", "utf8", JSON.stringify(notesArray), (err) => {
            if (err)
                console.log(err);
            else {
                res.json(req.body);
            }
        });
    });
});

app.delete("/api/notes/:id", (req, res) => {
    let id = req.params.id
    fs.readFile("./db/db.json", (err, data) => {
        data = JSON.parse(data);
        data = data.filter(text => text.id != id);

        fs.writeFile("./db/db.json", JSON.stringify(data), (err) => {
            if (err)
                console.log(err);
            else {
                console.log("note deleted\n");
                res.json({});
            }
        });
    })
});
}