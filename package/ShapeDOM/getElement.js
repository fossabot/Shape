/**
 * Copyright ©Summerytime 2019
 * License Under MIT
 */

'use strict';
/**
 * Require Pack
 */
//
/**
 * getElements Model
 */
//Begin GetElements;
function seleteElement(GetSeleteElements) {
    switch (GetSeleteElements) {
        case HTMLElement:
            return 1;
            break;
        case HTMLCollection:
            return 2;
            break;
        case NodeList:
            return 3;
            break;
        default:
            break;
    }
    return
}

function $_(SeleteElements) {
    var result = seleteElement(SeleteElements);
    return result;
}
$_.render = function() {

}
$_.render();