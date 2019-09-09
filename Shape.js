/**
 * Copyright Summerytime 2019
 * License Under MIT
 * @param ReadHTMLElements as String
*/
'use strict';
!function(globel, factory) {
  /**
     * INIT
  */
  typeof exports == "object" && typeof module !== "undefined" ? module.exports = factory() :
    typeof define === "function" && define.amd ? define(factory) : globel.shape = globel;
}(this, function() {
  /**
     * HTMLElement Module
  */
  var HTMLElements = { };

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
  function SeteleHTMLElements(value) {
    
  }
  function _toString(value)
  {
    Element.toString(value);
  }
});
