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
    this.doSort(false)
      .then(result => {
        console.log(result);
      })
      .catch(poop => console.log(poop));
  }

  doSort(isit) {
    return new Promise((res, rej) => {
      if (!this.ispause && this.reset) {
        isit = true;
        //recursive method
        clearTimeout(this.currentTimeOut);
        this.currentTimeOut = null;
        if (this.bubbleCounter < this.arleng - 1) {
          console.log('help1');
          var prevnum = this.currentar[this.bubbleCounter];
          var nextnum = this.currentar[this.bubbleCounter + 1];
          if (prevnum > nextnum) {
            isit = false;
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
              console.log(this.bubbleCounter);
              this.bubbleCounter++;
              this.doSort(isit)
                .then(poo => {
                  res(this.currentar);
                })
                .catch(poop => {
                  res('increment');
                });
            });
          }
        } else if (!isit) {
          if (this.bubbleCounter < this.currentar.length - 1)
            this.bubbleCounter++;
          else if (this.bubbleCounter == this.currentar.length - 1)
            this.bubbleCounter = 0;
          this.doSort(false)
            .then(poo => {
              res(this.currentar);
            })
            .catch(poop => {
              res('restat increment');
            });
        } else if (isit && this.bubbleCounter == this.currentar.length - 1) {
          this.issort = true;
          res(this.currentar);
        }
      } else if (this.issort) {
        res(this.currentar);
      } else {
        rej('paused');
      }
    });
  }
}
export default BubbleSort;
