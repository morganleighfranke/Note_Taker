const fs = require('fs');
//this is used to add a unique id to each note that is posted
// const { v4: uuidv4 } = require('uuid');
// uuidv4();
//exports all of this code to be available
module.exports = (app) => {
//when api notes is called then it reads the db file with the json objects in it with unique id
    app.get('/api/notes', (req, res) => {
        console.log(res);
        fs.readFile("./db/db.json", (err, data) => {
//if error only console log error
        if (err) {
            console.error(err);
//returns data in json format with response
        } else {
            res.json(JSON.parse(data));
        }
    })
});

//when posting a new note 
app.post("/api/notes", (req, res) => {
//read file of what's being stored in db 
    fs.readFile("./db/db.json", (err, data) => {
//use the req.body.id to equal new random id given by uuidv4
        // req.body.id = uuidv4();
//new variable notesArray that is equal to the data passed back through the req but puts in json format needed to send back
        let notesArray = JSON.parse(data);
//pushes new note that was posted to req body that is sent back in the response 
        notesArray.push(req.body);
//writes new file with unique id and db to stringify total notes in notesarray     
        fs.writeFile("./db/db.json", JSON.stringify(notesArray), (err) => {
            if (err)
                console.log(err);
//sends back response with new req.body that was saved
            else {
                res.json(req.body);
            }
        });
    });
});
//didn't get this fully working yet. 
//when note with id is clicked on 
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