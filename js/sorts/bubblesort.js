var issort;
var currentar;
var arleng;
var data;
var maxnum;

function bubbleSort(ar, dataBars) {
    issort = false;
    maxnum = Math.max(...ar);
    data = dataBars;
    //another way, declare is sorted as false; while, set is sorted to true, if there is a swap set it to false.
    //recursive method
    currentar = ar;
    arleng = currentar.length;
    doit(false);

    return currentar;
}

function doit(isit) {
    if (!isit) {
        currentTimeOut = setTimeout(halp, 1);
    } else {
        // console.log(currentar);
    }
}

function halp() {
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
    doit(isit);
}
