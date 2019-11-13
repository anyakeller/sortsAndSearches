import SortClass from './sortClass.js';
class BubbleSort extends SortClass {
  constructor(ar, maxNum, data, resizeBarHeight, swapBars) {
    super(ar, maxNum, data, resizeBarHeight, swapBars);
    this.issort = false;
    this.currentar = this.ar;
    this.bubbleCounter = 0;
    this.currentTimeOut = null;
    console.log(this);
  }

  pause() {
    clearTimeout(this.currentTimeOut);
    this.currentTimeOut = null;
    this.pause = true;
  }

  reset() {
    if (this.currentTimeOut != null) {
      clearTimeout(this.currentTimeOut);
      this.currentTimeOut = null;
    }
    this.issort = false;
    this.currentar = this.ar;
    this.bubbleCounter = 0;
    this.currentTimeOut = null;
    this.pause = true;
  }

  doSort() {
    this.pause = false;
    //recursive method
    if (this.issort) {
      this.sortStatus = true;
      console.log(this.currentar);
      return this.currentar;
    } else {
      this.currentTimeOut = setTimeout(this.halp(this), 10);
    }
  }

  halp(whome) {
    clearTimeout(whome.currentTimeOut);
    function ohno() {
      var prevnum = whome.currentar[whome.bubbleCounter];
      var isit = true;
      if (prevnum > whome.currentar[whome.bubbleCounter + 1]) {
        isit = false;
        whome.currentar[whome.bubbleCounter] =
          whome.currentar[whome.bubbleCounter + 1];
        whome.currentar[whome.bubbleCounter + 1] = prevnum;

        whome
          .swapBars(
            whome.data[whome.bubbleCounter],
            whome.currentar[whome.bubbleCounter],
            whome.data[whome.bubbleCounter + 1],
            whome.currentar[whome.bubbleCounter + 1],
            whome.maxNum
          )
          .then(function(asdf) {
            if (whome.bubbleCounter == whome.arleng - 1)
              whome.bubbleCounter = 0;
            else whome.bubbleCounter++;
            whome.doSort();
          });
      }
      whome.issort = isit;
    }
    return ohno;
  }
}
export default BubbleSort;
