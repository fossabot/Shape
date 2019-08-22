/**
 * Copyright ©Summerytime 2019
 * License Under MIT
 */

'use strict';
/**
 * Require Pack
 */

/**
 * getElements Model
 */
//Begin GetElements;
function seleteElement(GetSeleteElements) {
    var ElementType = null;
    switch (GetSeleteElements) {
        case HTMLElement:
            return ElementType = 'isGetFromID';
            break;
        case HTMLCollection:
            return ElementType = 'isGetFromName';
            break;
        case NodeList:
            return ElementType = 'isGetFromClassName';
            break;
        default:
            break;
    }
    return
}
/**
 * Render A Element
 * @param {$_} SeleteElements 
 */
function $_(SeleteElements) {
    var result = seleteElement(SeleteElements);
    return result;
}
$_.render = function() {

}
$_.render();