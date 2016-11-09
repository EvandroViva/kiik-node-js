"use strict"

var Resource = require('./resource.js');
var Get = require('./rest/get.js');
var GetAll = require('./rest/get_all.js');

class Payment extends Resource {
// class Customer {
    constructor(attributes = {}) {
        super(attributes)
        let self = this
        this.status = null
        this.received_at = null
        this.history_type = null
        this.compensated_at = null
        this.charge_id = null
        this.amount = null
        this.additional_info = null

        Object.keys(this).map(function(value, index) {
           self[value] = attributes[value];
        });
    }
}

for (var prototype in Get.prototype){
    Payment.prototype[prototype] = Get.prototype[prototype]
}

for (var prototype in GetAll.prototype){
    Payment.prototype[prototype] = GetAll.prototype[prototype]
}

module.exports = Payment;
