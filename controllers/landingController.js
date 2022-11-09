const express = require('express'); 

const landingPage = (req, res)  =>  {
    res.status(200).render('landingPage')
};



module.exports = landingPage;