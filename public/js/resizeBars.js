//GLOBAL helper functions
//to resize bar height
function resizeBarHeight(barElement, newvalue, maxnum) {
  return new Promise(res => {
    var newBarHeight = ((250 * newvalue) / maxnum).toString() + 'px';
    barElement.css('height', newBarHeight);
    res(true);
  });
}

function swapBars(barElement1, newvalue1, barElement2, newvalue2, maxnum) {
  return new Promise(res => {
    var newBarHeight1 = ((250 * newvalue1) / maxnum).toString() + 'px';
    var newBarHeight2 = ((250 * newvalue2) / maxnum).toString() + 'px';
    barElement1.css('height', newBarHeight1);
    barElement2.css('height', newBarHeight2);
    res(true);
  });
}

function sortStatus(arrayStatus,algoName, status) {
  arrayStatus.text(algoName + ' ' + status);
}

export {
  resizeBarHeight,
  swapBars,
  sortStatus
};
