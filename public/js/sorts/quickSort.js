import SortClass from './sortClass.js';
class QuickSort extends SortClass {
  constructor(ar, maxNum, data, dataBarUtils, quickSortPivotOptn) {
    super(ar, maxNum, data, dataBarUtils);
    this.pivotOptn = 'quickSortLast';
    this.issort = false;
    this.currentar = this.ar;
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
    console.log(this.pivotOptn);
    switch (this.pivotOptn) {
      case 'quickSortFirst':
        console.log(this.currentar);
        this.quickSortLast(this.currentar, this.data).then(ans => {
          console.log(ans);
        });
        break;
      case 'quickSortLast':
        console.log(this.currentar);
        this.quickSortLast(this.currentar, this.data).then(ans => {
          console.log(ans);
        });
        break;
      case 'quickSortRandom':
        this.quickSortRandom();
    }
  }

  stupidSwapThing(pivotValue, i, compareIndex, arr, dataSection) {
    return new Promise((res, rej) => {
      if (compareIndex < arr.length - 1) {
        if (arr[compareIndex] < pivotValue) {
          i++;
          var temp = arr[i];
          arr[i] = arr[compareIndex];
          arr[compareIndex] = temp;
          var ohgodno = this.dataBarUtils.swapBarsTimeout(
            dataSection[i],
            arr[compareIndex],
            dataSection[compareIndex],
            temp,
            this.maxNum
          );
          this.currentTimeOut = ohgodno.timeoutvalue;
          ohgodno.toomanypromises.then(yeet => {
            this.stupidSwapThing(
              pivotValue,
              i,
              compareIndex + 1,
              arr,
              dataSection
            ).then(stupidResults => {
              res(stupidResults);
            });
          });
        } else {
          this.stupidSwapThing(
            pivotValue,
            i,
            compareIndex + 1,
            arr,
            dataSection
          ).then(stupidResults => {
            res(stupidResults);
          });
        }
      } else {
        res({arr: arr, dataSection: dataSection, i: i});
      }
    });
  }

  innerForLoop(arr, dataSection) {
    return new Promise(res => {
      var pivotValue = arr[arr.length - 1];
      var i = -1;
      this.stupidSwapThing(pivotValue, i, 0, arr, dataSection).then(
        stupidResults => {
          res({
            arr: stupidResults.arr,
            dataSection: stupidResults.dataSection,
            i: stupidResults.i
          });
        }
      );
    });
  }

  //quick sort at first pivot
  quickSortLast(arr, dataSection) {
    return new Promise(res => {
      if (arr.length <= 1) {
        if (arr.length == 1)
          this.dataBarUtils.resizeBars(dataSection[0], arr[0], this.maxNum);
        res(arr);
      } else {
        this.innerForLoop(arr, dataSection).then(result => {
          arr = result.arr;
          dataSection = result.dataSection;
          var i = result.i;
          var temp = arr[i + 1];
          arr[i + 1] = arr[arr.length - 1];
          arr[arr.length - 1] = temp;
          var doASwap = this.dataBarUtils.swapBarsTimeout(
            dataSection[i + 1],
            arr[i + 1],
            dataSection[arr.length - 1],
            temp,
            this.maxNum
          );
          this.currentTimeOut = doASwap.timeoutvalue;
          doASwap.toomanypromises.then(ohno => {
            this.quickSortLast(
              arr.slice(0, i + 1),
              dataSection.slice(0, i + 1)
            ).then(ans => {
              ans.push(arr[i + 1]);
              this.quickSortLast(
                arr.slice(i + 2, arr.length),
                dataSection.slice(i + 2, arr.length)
              ).then(newAns => {
                res(ans.concat(newAns));
              });
            });
          });
        });
      }
    });
  }
  quickSortFirst() {}
  quickSortRandom() {}
}
export default QuickSort;
