const express = require('express');

const getAuthSignup = (req,res) => {
    res.status(200).render('auth/signup')
};

const signup = (req,res) => {

};

const getAuthSignin = (req,res) => {
    res.status(200).render('auth/signin')
};

const signin = (req,res) => {

};

const logout = (req,res) => {
    res.send('logout')
}




module.exports = {
    getAuthSignup, 
    signup, 
    getAuthSignin, 
    signin, 
    logout
}