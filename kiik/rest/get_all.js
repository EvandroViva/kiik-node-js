"use strict"


class Get {
    constructor(attributes = {}) {
        this.id = null
        this.created = null
        this.errors = null

        for(var attribute in attributes){
            this[attribute] = attributes[attribute]
        }
    }
}

Get.prototype.getAll = function(params={}, header={}, completion) {
    this.request(null, params, 'GET', header, completion)
}

module.exports = Get;
