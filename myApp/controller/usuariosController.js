var express = require('express');
const fs = require("fs");
const path = require('path');
const bcrypt = require('bcrypt');
const multer = require('multer');



const controller = {
    register : (req, res, next) => {
    res.render('users', { title: 'Express' })},

    save : (req, res, next) => {
      //tomar datos del form
      let user = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        mail: req.body.mail,
        contrasenia: bcrypt.hashSync(req.body.contrasenia, 10),
        contrasenia2: req.body.contrasenia2,
        //avatar: req.file.avatar,
      }
      
      if(bcrypt.compareSync(user.contrasenia2, user.contrasenia)){
        console.log("el password es correcto");
      }else{
        console.log("no puede ingresar, lo lamentamos");
      };
          
      let userJSON = JSON.stringify(user);
      fs.writeFileSync("users.json", userJSON);
      
      res.redirect("users");
    }
    };


module.exports = controller;

