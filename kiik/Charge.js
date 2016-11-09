"use strict"

var Resource = require('./resource.js');
var Create = require('./rest/create.js');
var Update = require('./rest/update.js');
var Get = require('./rest/get.js');
var GetAll = require('./rest/get_all.js');

class Charge extends Resource {
    constructor(attributes = {}) {
        super(attributes)
        let self = this
        this.customer_id = null
        this.amount = null
        this.receipt_email = null
        this.destination = null
        this.description = null
        this.statement_descriptor = null
        this.status = null
        this.intermediaries = null
        this.expected_compensation = null

        Object.keys(this).map(function(value, index) {
           self[value] = attributes[value];
        });
    }
}

for (var prototype in Create.prototype){
    Charge.prototype[prototype] = Create.prototype[prototype]
}

for (var prototype in Get.prototype){
    Charge.prototype[prototype] = Get.prototype[prototype]
}

for (var prototype in Update.prototype){
    Charge.prototype[prototype] = Update.prototype[prototype]
}

for (var prototype in GetAll.prototype){
    Charge.prototype[prototype] = GetAll.prototype[prototype]
}

module.exports = Charge;
