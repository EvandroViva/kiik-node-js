"use strict"

class Paginated {
    constructor(attributes = {}) {
        let self = this
        this.result = null
        this.total = null
        this.errors = null

        Object.keys(this).map(function(value, index) {
           self[value] = attributes[value];
        });
    }
}

module.exports = Paginated;
