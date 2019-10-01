/**
 * Copyright Summerytime 2019
 * License Under MIT
 * @param ReadHTMLElements as String
*/
'use strict';
!function(globel, factory) {
  /**
     * INIT From Most JS Framework Begin
  */
  typeof exports == "object" && typeof module !== "undefined" ? module.exports = factory() :
    typeof define === "function" && define.amd ? define(factory) : globel.shape = globel;
}(this, function() {
  /**
     * HTMLElement Module
  */
  var Shape;

  var initMsg = "Powered By Shape.js The repository is on Github. link is here : https://github.com/Summerytime/Shape"
  function _isObject(value) {
    
  }
  function _isArray(value){
    Array.isArray(value);
  }
  function _isString(){
    
  }
  function isHTMLElements(value) {
    if (value === document.ELEMENT_NODE){
      return true;
    }
    else {
      return false;
    }
  }

  function seletor(el){
  }

  function _toString(value)
  {
    var result = Element.toString(value);
	  return result;
  }

  function Exception(){
	  var errorLog = console.log
  }
});
