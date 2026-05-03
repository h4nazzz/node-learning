const express = require('express');
const app =express();
const {users} = require('./fun.js');

app.get('/',(req,res)=>{
    res.send(`<h1>Welcome to the Home Page</h1>
    <p>This is the Home Page</p>
    <p>Mazinka is GOAT</p>
    <a href="/api">Go to API</a>
    `);
});
app.get('/api',(req,res)=>{
    const newPro=users.map((user)=>{
        const {name,age}=user;
        return {name,age};
    });
    res.send(`${newPro.map((user)=>`<p>${user.name}: ${user.age}</p>`).join('')}<a href="/api/1">Go back to 1</a>`);
});

app.get('/api/:id',(req,res)=>{
    const {id} = req.params;
    const user = users.find((user)=>user.name === id);
     if(!user){ return res.status(404).send('User not found');}
    res.send(`<h1>Welcome to the API Page</h1>
    <p>This is the API Page</p>
    <p>Name: ${user.name}</p>
    <p>Age: ${user.age}</p>
    `);
});

app.listen(3000,()=>{
    console.log("server is listening");
})