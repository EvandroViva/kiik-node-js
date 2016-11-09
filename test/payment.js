"use strict"
var assert = require('chai').assert;
var request = require('request');

var Kiik = require('../index.js');
var payment = new Kiik.Payment

function ok(expr, msg) {
  if (!expr) throw new Error(msg);
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

describe('Payment', function() {
    it('Get', function (done) {
        payment.get({id:"customer_6968c772-2745-4626-87d1-0b381c5ac937"},{}, function(instance){
            done();
        })
    });
    it('Get All', function (done) {
        payment.getAll({page_size:2},{}, function(instance){
            done();
        })
    });
})
