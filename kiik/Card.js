"use strict"

var Resource = require('./resource.js');
var Create = require('./rest/create.js');
var Delete = require('./rest/delete.js');
var Get = require('./rest/get.js');
var Update = require('./rest/update.js');

class Card extends Resource {
    constructor(attributes = {}) {
        super(attributes)
        let self = this
        this.customer_id = null
        this.name = null
        this.number = null
        this.month = null
        this.year = null
        this.cvc = null
        this.card_alias = null
        this.cvc_check = null
        this.default = null
        this.last4 = null;

        Object.keys(this).map(function(value, index) {
           self[value] = attributes[value];
        });
    }
}

for (var prototype in Create.prototype){
    Card.prototype[prototype] = Create.prototype[prototype]
}

for (var prototype in Delete.prototype){
    Card.prototype[prototype] = Delete.prototype[prototype]
}

for (var prototype in Update.prototype){
    Card.prototype[prototype] = Update.prototype[prototype]
}

for (var prototype in Get.prototype){
    Card.prototype[prototype] = Get.prototype[prototype]
}

module.exports = Card;
