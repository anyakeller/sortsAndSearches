import SortClass from './sortClass.js';
class BubbleSort extends SortClass {
  constructor(ar, maxNum, data, resizeBarHeight, swapBars) {
    super(ar, maxNum, data, resizeBarHeight, swapBars);
    this.issort = false;
    this.currentar = this.ar;
    this.bubbleCounter = 0;
    this.currentTimeOut = null;
  }

  pause() {
    if (this.currentTimeOut != null) {
      clearTimeout(this.currentTimeOut);
    }
    this.currentTimeOut = null;
    this.ispause = true;
  }

  reset() {
    if (this.currentTimeOut != null) {
			console.log("woah");
      clearTimeout(this.currentTimeOut);
    }
    this.issort = false;
    this.currentar = this.ar;
    this.bubbleCounter = 0;
    this.currentTimeOut = null;
    this.ispause = true;
    this.isreset = true;
  }

  start() {
    if (this.ispause) this.ispause = false;
    if (this.isreset) this.isreset = false;
		this.doSort();
	}

  doSort() {
    if (!this.ispause && this.reset) {
      //recursive method
      if (this.issort) {
        this.sortStatus = true;
        console.log(this.currentar);
        return this.currentar;
      } else {
        this.currentTimeOut = setTimeout(this.halp(this), 1);
      }
    }
  }

  halp(whome) {
    function ohno() {
      clearTimeout(whome.currentTimeOut);
      whome.currentTimeOut = null;
      var isit = true;
      var prevnum = whome.currentar[whome.bubbleCounter];
      var nextnum = whome.currentar[whome.bubbleCounter + 1];
      if (prevnum > nextnum) {
        whome.currentar[whome.bubbleCounter] = nextnum;
        whome.currentar[whome.bubbleCounter + 1] = prevnum;

        whome
          .swapBars(
            whome.data[whome.bubbleCounter],
            nextnum,
            whome.data[whome.bubbleCounter + 1],
            prevnum,
            whome.maxNum
          )
          .then(function(asdf) {
            console.log(whome.bubbleCounter);
            if (whome.bubbleCounter == whome.arleng - 1)
              whome.bubbleCounter = 0;
            else whome.bubbleCounter = whome.bubbleCounter + 1;
            whome.doSort();
          });
      } else if (whome.bubbleCounter < whome.arleng - 1) {
        whome.bubbleCounter++;
        whome.doSort();
      } else if (whome.bubbleCounter == whome.arleng - 1) {
        whome.bubbleCounter = 0;
        whome.doSort();
      } else {
        whome.issort = true;
        whome.doSort();
      }
    }
    return ohno;
  }
}
export default BubbleSort;
