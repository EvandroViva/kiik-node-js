"use strict"


class Delete {
    constructor(attributes = {}) {
        this.id = null
        this.created = null
        this.errors = null

        for(var attribute in attributes){
            this[attribute] = attributes[attribute]
        }
    }
}

Delete.prototype.delete = function(params={id: 0}, header={}, completion) {
    this.request(params['id'], params, 'DELETE', header, completion)
}

module.exports = Delete;
