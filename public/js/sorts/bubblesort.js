import SortClass from './sortClass.js';
class BubbleSort extends SortClass {
  constructor(
    ar,
    maxNum,
    data,
    resizeBarHeight,
    swapBars,
    timeOutThingResize,
    timeOutThingSwap
  ) {
    super(
      ar,
      maxNum,
      data,
      resizeBarHeight,
      swapBars,
      timeOutThingResize,
      timeOutThingSwap
    );
    this.issort = false;
    this.currentar = this.ar;
    this.bubbleCounter = 0;
		this.didSwapThisRound = false;
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
    this.pause();
  }

  start() {
    if (this.ispause) this.ispause = false;
    if (this.isreset) this.isreset = false;
    this.doSort()
      .then(sortFinished => {
        console.log(sortFinished);
      })
      .catch(poop => console.log(poop));
  }

  // helper function to deal with comparing two values
  // promise resolves with whether the swap happened or not
  dealWithComparison(prevnum, nextnum) {
    return new Promise((res, rej) => {
      // if you need to swap
      if (prevnum < nextnum) {
        console.log("it's less");
        this.currentar[this.bubbleCounter] = nextnum;
        this.currentar[this.bubbleCounter + 1] = prevnum;

        var killme = this.timeOutThingSwap(
          this.data[this.bubbleCounter],
          nextnum,
          this.data[this.bubbleCounter + 1],
          prevnum,
          this.maxNum
        );
        this.currentTimeOut = killme.timeoutvalue;
        killme.toomanypromises.then(yeet => {
          console.log('swapping at', this.bubbleCounter);
          res(true); // tell the function that called this that the swap happened
        });
      } else {
        res(false); //tell the function that called this that the swap didn't happen
      }
    });
  }

  //recursive method
  doSort() {
    return new Promise((res, rej) => {
      clearTimeout(this.currentTimeOut);
      this.currentTimeOut = null;
      // if the counter is not at the last element, i.e. there are two left to possibly swap
      if (this.bubbleCounter < this.arleng - 1) {
        console.log('doing rounds at', this.bubbleCounter);
        // get the current and next number to compare
        var prevnum = this.currentar[this.bubbleCounter];
        var nextnum = this.currentar[this.bubbleCounter + 1];
        //use a helper function that compares and waits for swap if neccessary
        this.dealWithComparison(prevnum, nextnum).then(hasDoneSwap => {
					if(hasDoneSwap) this.didSwapThisRound = true;
          // if a swap has not happened and it's the end of the array then it's sorted
          if (!this.didSwapThisRound && this.bubbleCounter == this.arleng - 2) {
						console.log(this.currentar);
            this.issort = true;
            res(true); //yay!
          } else {
            //otherwise reset or increment and then rerun sort
            //if it has hit the end of the array
            if (this.bubbleCounter == this.arleng - 2) {
              this.bubbleCounter = 0;
							this.didSwapThisRound = false;
            } else {
              //otherwise increment counter
              this.bubbleCounter++;
            }
            //rerun sort function
            this.doSort().then(didItDo => {
              res(didItDo);
            });
          }
        });
      } else {
        rej('ahhh');
      }
    });
  }
}
export default BubbleSort;
