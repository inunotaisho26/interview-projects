const express = require("express"),
    app = express(),
    fs = require('fs'),
    path = require('path'),
    bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.post('/patients', (req, res) => {
    console.log('Im here fish', req.body)
    fs.readFile(path.resolve(__dirname + './../data-store/data.json'), 'utf8', (err, data) => {
        // const fileContents = JSON.parse(data);
        // const reqBody = req.body;
        // const {name, email} = reqBody;
        // const newData = {
        //     id: fileContents[fileContents.length - 1].id + 1,
        //     name,
        //     email
        //     }
        // fileContents.push(newData);





        // fs.writeFile(path.resolve(__dirname + './../data-store/data.json'), JSON.stringify(fileContents), (err) => {
        //     if (err) throw err
        //     res.end()
        // });


        const allData = JSON.parse(data);
        const newData = [...allData];

        req.body.id = newData.pop().id + 1;

        allData.push(req.body);

        fs.writeFile(path.resolve(__dirname + './../data-store/data.json'), JSON.stringify(allData), (err) => {
            if (err) throw err;
            res.end();
        });
    });
});

app.get('/patients', (req, res) => {
    fs.readFile(path.resolve(__dirname + './../data-store/data.json'), 'utf8', (err, fileContents) => {
        res.send(JSON.parse(fileContents));
    });
});

app.put('/patients/:id', (req, res) => {
    console.log('body shits', req.body, 'sfsds', req.params, 'query shits', req.query);

    fs.readFile(path.resolve(__dirname + './../data-store/data.json'), 'utf8', (err, data) => {
        const allData = JSON.parse(data);
        const newData = allData.filter(x => x.id == req.params.id)[0];
        if (!newData) {
            return res.send({ Error: 'Patient data does not exist' });
        };
        const anything = {};

        if (req.body.name && req.body.name !== newData.name) {
            anything['name'] = req.body.name;
        } else {
            anything['name'] = newData.name;
        }

        if (req.body.email && req.body.email !== newData.email) {
            anything['email'] = req.body.email
        } else {
            anything['email'] = newData.email;
        }
        anything['id'] = parseInt(req.params.id);

        const i = allData.indexOf(newData);
        allData[i] = anything;



        fs.writeFile(path.resolve(__dirname + './../data-store/data.json'), JSON.stringify(allData), (err) => {
            res.send(allData);
        });
    })
    //    res.end();
});

app.delete('/patients/:id', (req, res, next) => {
    fs.readFile(path.resolve(__dirname + './../data-store/data.json'), 'utf8', (err, data) => {
        const allData = JSON.parse(data);
        const newData = allData.filter(x => x.id != req.params.id);

        fs.writeFile(path.resolve(__dirname + './../data-store/data.json'), JSON.stringify(newData), (err) => {
            res.send(newData);
        });
    });
})

app.listen(4001, () => console.log('Api server started at 4001'));



// grab arr data
// create a new object with input_id and req.body
// 
