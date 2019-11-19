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
    return new Promise(res => {
      if (compareIndex < arr.length - 1) {
        if (arr[compareIndex] < pivotValue) {
          i++;
          var temp = arr[i];
					console.log("swapping at " + i + " and " + compareIndex);
          arr[i] = arr[compareIndex];
          arr[compareIndex] = temp;
          console.log('swapping if');
          var ohgodno = this.dataBarUtils.swapBarsTimeout(
            dataSection[i],
            arr[i],
            dataSection[compareIndex],
            arr[compareIndex],
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
            ).then(stupidResults => res(stupidResults));
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
        console.log('yeet');
        console.log({arr: arr, dataSection: dataSection, i: i});
        res({arr: arr, dataSection: dataSection, i: i});
      }
    });
  }

  innerForLoop(arr, dataSection) {
    return new Promise(res => {
      var pivotValue = arr[arr.length - 1];
      var i = -1;
      var poo = this.stupidSwapThing(pivotValue, i, 0, arr, dataSection);
      console.log(poo);
      res(poo);
    });
  }

  //quick sort at first pivot
  quickSortLast(arr, dataSection) {
    if (arr.length <= 1) {
      if (arr.length == 1)
        this.dataBarUtils.resizeBars(dataSection[0], arr[0], this.maxNum);
      return arr;
    } else {
      this.innerForLoop(arr, dataSection).then(innerResult => {
        arr = innerResult.arr;
        dataSection = innerResult.dataSection;
        var i = innerResult.i;
        var temp = arr[i + 1];
        arr[i + 1] = arr[arr.length - 1];
        arr[arr.length - 1] = temp;
        console.log('Swapping in quick');
        this.dataBarUtils.swapBars(
          dataSection[i + 1],
          arr[i + 1],
          dataSection[arr.length - 1],
          temp,
          this.maxNum
        );
        var ans = [];
        ans.concat(
          this.quickSortLast(arr.slice(0, i + 1), dataSection.slice(0, i + 1))
        );
        ans.push(arr[i + 1]);
        ans.concat(
          this.quickSortLast(
            arr.slice(i + 2, arr.length),
            dataSection.slice(i + 2, arr.length)
          )
        );
        return ans;
      });
    }
  }
  quickSortFirst() {}
  quickSortRandom() {}
}
export default QuickSort;
