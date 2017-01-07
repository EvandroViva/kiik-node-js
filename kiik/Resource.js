"use strict"

var request = require('request');
var Paginated = require('./Paginated.js');

var config = {
    'development': {
        'host': 'http://localhost:5000',
        'api_key': 'payos_test',
        'version': '0.3'
    },
    'staging': {
        'host': 'https://staging-api.kiik.com/',
        'api_key': process.env.KIIK_API_KEY || 'B31DCE74-E768-43ED-86DA-85501612548F',
        'version': '0.3'
    },
    'production': {
        'host': 'https://api.kiik.com',
        'api_key': process.env.KIIK_API_KEY,
        'version': '0.3'
    }
};

function merge_options(obj1,obj2){
    var obj3 = {};
    for (var attrname in obj1) { obj3[attrname] = obj1[attrname]; }
    for (var attrname in obj2) { obj3[attrname] = obj2[attrname]; }
    return obj3;
}

var env = process.env.KIIK_ENV || 'staging'

var host = config[env]['host']
var version = config[env]['version']
var api_key = config[env]['api_key']

class Resource {
    constructor(attributes = {}) {
        let self = this
        this.id = undefined
        this.created = undefined
        this.errors = undefined

        Object.keys(this).map(function(value, index) {
           self[value] = attributes[value];
        });
    }
}

Resource.prototype.class_name = function() {
    return this.constructor.name
}

Resource.prototype.url = function() {
    return host+"/"+this.class_name().toLowerCase()+"s"
}

Resource.prototype.opts = function(headers={}, url, method) {
    return {
        // rejectUnauthorized: false,
        // proxy: "http://localhost:8888",
        headers: merge_options({
            "Accept-Version": version,
            "Content-Type": 'application/json',
            "Authorization" : "Basic " + new Buffer(api_key + ":" + '').toString("base64")
        },headers),
        url: url,
        method: method
    }
}

Resource.prototype.build = function(data, error=null) {
    let self = this
    var instance = null;
    if (data['result'] && data['total']) {
        instance = new Paginated()

        instance.result = data['result'].map(function(value, index) {
           return new self.constructor(value)
        });

        instance.total = data['total']
    } else {
        instance = new self.constructor(data)
    }
    instance.errors = error != null ?  error.errors : null
    return instance
}

Resource.prototype.request = function(path=null, params={}, method='GET', header={}, completion) {
    let self = this
    let url_abs = path == null ? this.url() : this.url()+"/"+path
    var options = this.opts(header, url_abs, method)
    options.json = params;
    request(options, function (err, res, body){
        if (res != null) {
            switch (res.statusCode) {
                case 200:
                case 402:
                    completion(self.build(res.body))
                    break
                case 422:
                case 405:
                    console.log("Method Not Allowed".red)
                    completion(null)
                    break
                case 404:
                    console.log("TODO: error")
                    completion(null)
                    break
            }
        } else {
            console.log("TODO: error".red);
            completion(null)
      }
  });
}

module.exports = Resource;
