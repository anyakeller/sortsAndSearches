//QUICK SORT OBJECT
var qSObject = {
    issort: false,
    interval: 0,
    quickTimeOut: null,
    currentar: [],
    quickSortInit(ar, dataBars) {
        this.currentar = ar;
    }
};

function quickSort(ar, dataBars, issortfirst, issorlast) {
    qSObject.quickSortInit(ar, dataBars);

    swap(qSObject, 0, 1, dataBars);
}

function swap(whoDis, index1, index2, dataBars) {
    var prev = whoDis.currentar[index1];
    whoDis.currentar[index1] = whoDis.currentar[index2];
    whoDis.currentar[index2] = prev;
    resizeBarHeight(dataBars[1], 100, maxnum);
    resizeBarHeight(dataBars[2], 200, maxnum);
}
