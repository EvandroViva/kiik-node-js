"use strict"
var assert = require('chai').assert;
var request = require('request');
var colors = require('colors');

var Kiik = require('../index.js');
var card = new Kiik.Card

function ok(expr, msg) {
  if (!expr) throw new Error(msg);
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

describe('Card', function() {
    it('Create', function (done) {
        card.create({customer_id: "customer_7241f2c6-d8d7-4648-9843-e494c1ac881b",name: "Est luminus",number: "44445555555555555",month: "6",year: "2020",cvc: "563"},{}, function(instance){
            done();
        })
    });
    it('Update', function (done) {
        card.update({id:"card_a5fd213e-52e5-4dd0-b5df-85c3de190514", name: "Est luminus",number: "44445555555552323", year: "20"},{}, function(instance){
            done();
        })
    });
    it('Get', function (done) {
        card.get({id:"card_a5fd213e-52e5-4dd0-b5df-85c3de190514"},{}, function(instance){
            done();
        })
    });
})
