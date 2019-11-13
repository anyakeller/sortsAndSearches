//GLOBAL helper functions
//to resize bar height
function resizeBarHeight(barElement, newvalue, maxnum) {
    var newBarHeight = ((250 * newvalue) / maxnum).toString() + "px";
    barElement.css("height", newBarHeight);
}
function sortStatus(algoName, status) {
    arrayStatus.text(algoName + " " + status);
}

module.exports = {
    resizeBarHeight: resizeBarHeight,
    sortStatus: sortStatus
};
