var Heros = require ('./heros.controller');


module.exports = function(router) {
    router.post ('/create', Heros.createHero);
    router.get ('/Heros', Heros.getHeros);
    router.get ('Hero/:name', Heros.getHero);
    router.put ('/update/:id', Heros.updateHero);
    router.delete ('/remove/:id', Heros.removeHero);
}