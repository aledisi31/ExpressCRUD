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
    Heros.get ({name: req.params.name}, function(err, heros) {
        if(err) {
            res.json ({error: err})
        }
         res.json ({heros: heros})
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
    Heros.deleteOne({_id: req.params.id}, function (err, hero) {
        if (err) {
            res.json({error: err})
        }
        res.json ({message: "Hero deleted successfully"})
    })
}