"use strict"


class Update {
    constructor(attributes = {}) {
        this.id = null
        this.created = null
        this.errors = null

        for(var attribute in attributes){
            this[attribute] = attributes[attribute]
        }
    }
}

Update.prototype.update = function(params={id: 0}, header={}, completion) {
    this.request(params['id'], params, 'PUT', header, completion)
}

Update.prototype.cancel = function(params={id: 0}, header={}, completion) {
    this.request(params['id']+"/cancel", params, 'PUT', header, completion)
}

Update.prototype.capture = function(params={id: 0}, header={}, completion) {
    this.request(params['id']+"/capture", params, 'PUT', header, completion)
}

module.exports = Update;
