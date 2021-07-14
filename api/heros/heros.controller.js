const { Router } = require('express');
var Heros = require('./heros.dao');

exports.createHero = function (req, res, next) {
    var hero = {
        name: req.body.name,
        description: req.body.description
    };
    Heros.create(hero, function(err, hero) {
        if(err) {
            res.json({error: err})
        }
        res.redirect('/api/Heros')
        console.log('New HERO created!')
    })
}

exports.getHeros = function (req, res, next) {
    Heros.get({}, function (err, heros) {
        if(err) {
            res.json({error: err})
        }
        res.render('index.ejs', {heros: heros});
    })
}


exports.getHero = function (req, res, next) {
    Heros.getByName ({name: req.params.name}, function(err, heros) {
        if(err) {
            res.json ({error: err})
           
        }
         res.json ({heros: heros})
    })
}

exports.getHeroById = function (req, res, next) {
    Heros.getById ({_id: req.params.id}, function(err, heros) {
        if(err) {
            res.json ({error: err})
             console.log('errore')
        }
        //  res.render('update.ejs', {heros: heros});
        res.json ({heros: heros});
        console.log('Eroe trovato')
    })
}

exports.updateHero = function(req, res, next) {
    var hero = {
        name: req.body.name,
        description: req.body.description
    }
    Heros.updateOne({_id: req.params.id}, hero, function(err, hero) {
        if(err) {
            res.json({error : err})
        }
        res.json({message : "Hero updated successfully"})
    })
}

exports.removeHero = function (req, res, next) {
    Heros.delete({_id: req.params.id}, function (err, hero) {
        if (err) {
            res.json({error: err})
        }
        
        console.log('Hero deleted')
    })
}