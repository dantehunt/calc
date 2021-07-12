/*import express from 'express';
import {add, subtract, multiply, validateNumber, divide} from './functions';
const app = express();

app.use((req, res, next)=>{
    if(!validateNumber(re) || !validateNumber(req.query.num2))
        return res.status(403).send("Numbers are invalid");
    next();
});

app.get("/add", (req, res)=>{
    res.send(add(Number(req.query.num1), Number(req.query.num2)).toString());
});

app.get("/subtract", (req, res)=>{
    res.send(subtract(Number(req.query.num1), Number(req.query.num2)).toString());
});

app.get("/multiply", (req, res)=>{
    res.send(multiply(Number(req.query.num1), Number(req.query.num2)).toString());
});

app.get("/divide", (req, res)=>{
    if(Number(req.query.num2)===0) 
        return res.status(403).send("A number cannot be divided by zero");
    res.send(divide(Number(req.query.num1), Number(req.query.num2)).toString());
});

app.listen(8080, ()=>{
    console.log("Server is listening on port 8080");
});
*/