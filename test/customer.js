"use strict"
var assert = require('chai').assert;
var request = require('request');

var Kiik = require('../index.js');
var customer = new Kiik.Customer

function ok(expr, msg) {
  if (!expr) throw new Error(msg);
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

describe('Customer', function() {
    it('Create', function (done) {
        customer.create({name: "User name", email: "user@email.com"},{}, function(instance){
            done();
        })
    });
    it('Update', function (done) {
        customer.update({id:"customer_a5fd213e-52e5-4dd0-b5df-85c3de190514", name: "User name", email: "user@email.com"},{}, function(instance){
            done();
        })
    });
    it('Get', function (done) {
        customer.get({id:"customer_a5fd213e-52e5-4dd0-b5df-85c3de190514"},{}, function(instance){
            done();
        })
    });
    it('Get All', function (done) {
        customer.getAll({},{}, function(instance){
            done();
        })
    });
})
