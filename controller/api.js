const express=require('express');
const Cat = require('../models/mainModel');
const mongoose=require("mongoose");
const getData = async function(req, res) {
    try {
        const mydata = await Cat.find(req.query);
        res.status(200).json(mydata);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports=getData;