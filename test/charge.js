"use strict"
var assert = require('chai').assert;
var request = require('request');

var Kiik = require('../index.js');
var charge = new Kiik.Charge

function ok(expr, msg) {
  if (!expr) throw new Error(msg);
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

describe('Charge', function() {
    it('Create', function (done) {
        charge.create({amount: 25, customer_id: "customer_ab32d26f-f396-460e-a2c4-7963543055b4"},{}, function(instance){
            ok(instance.amount == 25, "Parameters 'amount' don't match.")
            done();
        })
    });
    it('Create [Destination]', function (done) {
        charge.create({amount: 25, customer_id: "customer_ab32d26f-f396-460e-a2c4-7963543055b4", statement_descriptor: "teste", destination: "customer_bdb43875-a19f-4d0a-a901-720e33cc5745"},{}, function(instance){
            ok(instance.amount == 25, "Parameters 'amount' don't match.")
            ok(instance.statement_descriptor == "teste", "Parameters 'statement_descriptor' don't match.")
            done();
        })
    });
    it('Create [Destination/Intermediaries]', function (done) {
        let data = {
            amount: 25
            , customer_id: "customer_ab32d26f-f396-460e-a2c4-7963543055b4"
            , statement_descriptor: "teste"
            , destination: "customer_bdb43875-a19f-4d0a-a901-720e33cc5745"
            , intermediaries: [{
                "fee": 0.0,
                "flat": 10,
                "description": "Win 10 cents promotion",
                "customer_id": "customer_74ff4ff0-0d95-4d18-a1c5-187f3fca0df6"
            }]
        }
        charge.create(data,{}, function(instance){
            ok(instance.amount == 25, "Parameters 'amount' don't match.")
            ok(instance.statement_descriptor == "teste", "Parameters 'statement_descriptor' don't match.")
            done();
        })
    });
    it('Get', function (done) {
        charge.get({id:"charge_a5fd213e-52e5-4dd0-b5df-85c3de190514"},{}, function(instance){
            done();
        })
    });
    it('Get All', function (done) {
        charge.getAll({},{}, function(instance){
            done();
        })
    });
    it('Cancel', function (done) {
        charge.cancel({id:"charge_ed20627b-8bf4-434b-995c-e7ce256115ab"},{}, function(instance){
            done();
        })
    });
    it('Capture', function (done) {
        charge.capture({id:"charge_ed20627b-8bf4-434b-995c-e7ce256115ab"},{}, function(instance){
            done();
        })
    });
})
