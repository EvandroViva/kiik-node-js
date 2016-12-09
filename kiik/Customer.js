"use strict"

var Resource = require('./Resource.js');
var Create = require('./rest/create.js');
var Update = require('./rest/update.js');
var Get = require('./rest/get.js');
var GetAll = require('./rest/get_all.js');

class Customer extends Resource {
// class Customer {
    constructor(attributes = {}) {
        super(attributes)
        let self = this
        this.phone = null
        this.number = null
        this.document = null
        this.name = null
        this.email = null
        this.metadata = null
        this.description = null
        this.cards = null

        Object.keys(this).map(function(value, index) {
           self[value] = attributes[value];
        });

        this.cards = attributes.cards == null ? [] : attributes.cards.map(function(card){
            return Card(card)
        })
    }
}

for (var prototype in Create.prototype){
    Customer.prototype[prototype] = Create.prototype[prototype]
}

for (var prototype in Update.prototype){
    Customer.prototype[prototype] = Update.prototype[prototype]
}

for (var prototype in Get.prototype){
    Customer.prototype[prototype] = Get.prototype[prototype]
}

for (var prototype in GetAll.prototype){
    Customer.prototype[prototype] = GetAll.prototype[prototype]
}

module.exports = Customer;
