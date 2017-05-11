'use strict'

class StringSplosion {
    constructor(string) {
        this.string = string;
        this.sploded='';
    }
    manipulate() {
      //var sploded='';
      for (var i=0; i<this.string.length+1; ++i){
        this.sploded += this.string.slice(0, i);
       
      }
      return this.sploded;
      
    }
}

module.exports = StringSplosion