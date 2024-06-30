# making express js 

## Basic setup
1. make the directory
2. in directory `npm i` to innitiate a project;
3. Add gitignore and other things 
4. make `server.js` file. 
5. install express : `npm install express`
6. install  `npm i -D nodemon` so automatically restart the server when changes are made. 
7. After this go to `package.json` and confirm the dependencies in `devDependencies` and `dependencies`.
8. In `package.json` Under `scripts`, add the below scripts to start the server and to start the dev mode for the server with nodemon:
   ``` 
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "start": "node server.js",
        "dev": "nodemon server.js"
     },
     ```

9.  Start the dev with `npm run dev`
10. Now To confirm go to server.js and confirm the server is running go to `script.js` and add a console log and see the demon server updating automatically

## Creating Express Server
1. In the `server.js` add the following commands
```js
const express = require("express");
// importing
const app = express();
// making app

const port = 5000;
// defining port : static server

app.listen(port, () =>{
    console.log(`Server running on port ${port}`);
})
// listening to the port and going in call back to log console.

```

Now lets have `.env` file 
1. Create file `.env` and add following line 
    ```
    PORT=5001
    ```
2. along with this we need to instal dotenv. This is going to give us the access to fetch the port from the .env file with the help of a process module , which is a core module of node.js
   ```
   npm i dotenv
   ```
3. Now add following code in node js: 
```js

const express = require("express");
// dotenv import
const dotenv = require("dotenv").config();

const app = express();

//using process module
const port = process.env.PORT || 5000;

app.listen(port, () =>{
    console.log(`Server running on port ${port}`);
})

```
4. the console wi=ould change from 5000 -> 5001

## creating first get request 
In the server.js add the following code :
```js
app.get('/api/contacts', (req,res) => {
    res.send("Get All Contacts");
});

```

see the request how it runs should output the String in the response.

Now to make response JSON just edit the line like the following :
```js
app.get('/api/contacts', (req,res) => {
    res.json({message:"Get All Contacts"});
});
```

we can also pass the status code :
```js
app.get('/api/contacts', (req,res) => {
    res
    .status(200)
    .json({message:"Get All Contacts"});
});
```

This was an example of just making an endpoint, but we are not going to have all our routs in server.js. 

## handling routes
We are going to handle routes by making a new folder `routes`. 

Inside make a new file `contactRoutes.js`. 

in `contactRoutes.js`: 

add first the imports : 
```js
const express = require("express");
const router = express.Router();
```
and in server.js wewill use app.use() to make a middleware where we will define thebase route and give access to the routerclass. 

In app js remove the previous get method. 
```js
//app.js 

app.use("/api/contacts", require("../routes/contactRoutes.js"));

```

in the `contactRoutes.js` file :
```js
router.route("/").get((req, res) =>{
    res.status(200).json({message:"Get All Contacts"})
});
module.exports = router;
```

Later add otherroutes and then check the response aswell :
Updated `contactRoutes.js` is follows : 
```javascript
const express = require("express");
const router = express.Router();

router.route("/").get((req, res) =>{
    res.status(200).json({message:"Get All Contacts"})
});

router.route("/").post((req, res) =>{
    res.status(200).json({message:"Create Contact"})
});

router.route("/:id").get((req, res) =>{
    res.status(200).json({message:`Get Contact for ${req.params.id}`})
});

router.route("/:id").put((req, res) =>{
    res.status(200).json({message:`Update contact for ${req.params.id}`})
});

router.route("/:id").delete((req, res) =>{
    res.status(200).json({message:`Delete Contact for ${req.params.id}`})
});

module.exports = router;

```
