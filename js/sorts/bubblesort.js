var issort = false;
var interval;
var currentar;
var arleng;
var data;
var maxnum;
function bubbleSort(ar, dataBars) {
    maxnum == Math.max(...ar);
    data = dataBars;
    //another way, declare is sorted as false; while, set is sorted to true, if there is a swap set it to false.
    //recursive method
    currentar = ar;
    arleng = currentar.length;
    doit(false);

    return currentar;
}

var counter = 0;

function doit(isit) {
    if (!isit) {
        currentTimeOut = setTimeout(halp, 1);
    } else {
        // console.log(currentar);
    }
}

function halp() {
    prevnum = currentar[counter];
    var isit = true;
    if (prevnum > currentar[counter + 1]) {
        isit = false;
        currentar[counter] = currentar[counter + 1];
        currentar[counter + 1] = prevnum;
        resizeBarHeight(data[counter], currentar[counter], maxnum);
        resizeBarHeight(data[counter + 1], currentar[counter + 1], maxnum);
    }

    if (counter == arleng - 1) {
        counter = 0;
    } else {
        counter++;
    }
    isit = issort;
    doit(isit);
}
