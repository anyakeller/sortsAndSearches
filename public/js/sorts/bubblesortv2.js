var issort;
// var currentar;
var arleng;
var data;
var maxnum;

function bubbleSortv2(ar, dataBars) {
    var currentar = ar;
    issort = false;
    maxnum = Math.max(...ar);
    data = dataBars;
    //another way, declare is sorted as false; while, set is sorted to true, if there is a swap set it to false.
    //recursive method
    // currentar = ar;
    arleng = currentar.length;
    doit(false, currentar);

    return currentar;
}

function doitv2(isit, currentar) {
    if (!isit) {
        currentTimeOut = setTimeout(halpv2, 1, currentar);
    } else {
        // console.log(currentar);
    }
}

function halpv2(currentar) {
    prevnum = currentar[bubbleCounter];
    var isit = true;
    if (prevnum > currentar[bubbleCounter + 1]) {
        isit = false;
        currentar[bubbleCounter] = currentar[bubbleCounter + 1];
        currentar[bubbleCounter + 1] = prevnum;
        resizeBarHeight(data[bubbleCounter], currentar[bubbleCounter], maxnum);
        resizeBarHeight(
            data[bubbleCounter + 1],
            currentar[bubbleCounter + 1],
            maxnum
        );
    }

    if (bubbleCounter == arleng - 1) {
        bubbleCounter = 0;
    } else {
        bubbleCounter++;
    }
    isit = issort;
    doitv2(isit);
}
