"use strict"


class Create {
    constructor(attributes = {}) {
        this.id = null
        this.created = null
        this.errors = null

        for(var attribute in attributes){
            this[attribute] = attributes[attribute]
        }
    }
}

Create.prototype.create = function(params={}, header={}, completion) {
    this.request(null, params, 'POST', header, completion)
}

module.exports = Create;
