var mongoose = require ('mongoose');
var herosSchema = require ('./heros.model');

herosSchema.statics = {
    create: function (data, cb) {
        var hero = new this(data);
        hero.save (cb);
    },
    get: function (query, cb) {
        this.find(query, cb);
    },
    getByName: function (query, cb) {
        this.find (query, cb);
    },
    getById: function (query, cb) {
        this.findById (query, cb);
    },
    updateOne: function (query, updateData, cb) {
        this.findOneAndUpdate (query,
            {$set: updateData}, {new: true}, cb);
    },
    delete: function (query, cb) {
        this.deleteOne (query, cb);
    }
}

var herosModel = mongoose.model('Heros', herosSchema);

module.exports = herosModel;