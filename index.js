//const express = required ('express');
import express from 'express';
const app = express();

app.get('/home',(req, res ) => {
    res.json({message: 'Ok'})
});

app.listen(3000, () => {
console.log("Started the server")
});
