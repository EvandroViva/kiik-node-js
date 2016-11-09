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

Get.prototype.get = function(params={id: 0}, header={}, completion) {
    this.request(params['id'], params, 'GET', header, completion)
}

module.exports = Get;
