const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Record = require('./database');
const app = express();

// Bodyparser Middleware
app.use(bodyParser.json());

app.post('/saveUni', async (req, res) => {
    const saveUni = new Record ({
        universityName: req.body.name,
        webpage: req.body.web_page,
        domain: req.body.domain,
        country: req.body.country,
    });

    saveUni.save().then(result => {
        console.log(result);
        console.log("University details saved into database successfully");
    });
})


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));