'use strict';

var textbooks = require('../controllers/textbook.server.controller');

module.exports = function(app){
    app.route("/:id")
    .get(textbooks.list);

    app.route("")
    .post(textbooks.create);
}