const express = require("express");
const webpush = require("web-push");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

// Set static path
app.use(express.static(path.join(__dirname, "client")));

app.use(bodyParser.json());

// ./node_modules/.bin/web-push generate-vapid-keys
const publicVapidKey = "BD8PIxKZGz9Bs0srMZIoVhOxSEJSloPeig7nzYxbYwYZx7VhVmD0F2g13qQLTJ405Qd5LHShvkoVP792_HsUk-4";
const privateVapidKey = "6VNW2wXdx2_M_Jmgpfwhzx9BjS4dJwp0orSu6nrXqh8";

webpush.setVapidDetails("mailto:sasa.vlaisavljevic@euroherc.hr", publicVapidKey, privateVapidKey);

// Subscribe Route
app.post("/subscribe", (req, res) => {
    // Get push subscription object
    const subscription = req.body;

    // Send 201 - resource created
    res.status(201).json({});

    // Ceate payload
    const payload = JSON.stringify({title: 'Push test'});

    // Pass object into sendNotification 
    webpush.sendNotification(subscription, payload).catch(err => console.error(err) )
});

const port = 5000;
app.listen(port, () => console.log(`Server start on port: ${ port }`));