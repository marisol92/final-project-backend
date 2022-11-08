const express = require('express');
const passport = require('passport');

const Auth = require('../models/Auth');

const getAuthSignup = (req,res) => {
    res.status(200).render('auth/signup')
};

const signup = async (req,res) => {

    try {
        
        const errors = [];
        const { email, name, password, confirm_password } = req.body; 
        //console.log(req.body)

        if( password !== confirm_password) {
            
            errors.push({ msg: 'Password do not match. '})
        }

        if( password.length < 4){
            errors.push({ msg: 'Password must be at least 4 characters.'})
        }

        if( errors.length > 0){
            return res.render('auth/signup', {
                errors,
                name,
                email
            })
        }

        const userFound = await Auth.findOne({ email })
        
        if( userFound ){
            req.flash('todo_error', "The email entered already exists")
            return res.redirect('/auth/signup')
        }

        const newUser = new Auth({name, email, password});
        newUser.password = await newUser.passwordEncrypt(password) ;
        await newUser.save(); 
        req.flash("todo_ok", "Registered successfully")
        res.redirect('/auth/signin')

    } catch (error) {
        console.error('Algo salio mal, busquemos el error: ', error)
    }
    
};

const getAuthSignin = (req,res) => {
    res.render('auth/signin')
};

const signin = passport.authenticate('local', {
    successRedirect: '/home',
    failureRedirect: '/auth/signin',
    failureFlash: true,
})

const logout = async (req, res, next) => {
    await req.logout((err) => {
        if( err ) return next();
        req.flash("todo_ok", "successfully logged out")
        res.redirect('/auth/signin')
    })
}




module.exports = {
    getAuthSignup, 
    signup, 
    getAuthSignin, 
    signin, 
    logout
}