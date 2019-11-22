import SortClass from './sortClass.js';
class QuickSort extends SortClass {
  constructor(ar, maxNum, data, dataBarUtils, quickSortPivotOptn) {
    super(ar, maxNum, data, dataBarUtils);
    this.pivotOptn = quickSortPivotOptn;
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
    if (this.isreset) this.isreset = false;
    if (this.ispause) this.ispause = false;

    this.ispause = false;
    console.log(this.pivotOptn);
    switch (this.pivotOptn) {
      case 'quickSortFirst':
        console.log(this.currentar);
        console.log(this.quickSortLast(this.currentar, this.data));
        break;
      case 'quickSortLast':
        console.log(this.currentar);
        // console.log(this.quickSortLast(this.currentar, this.data));
        var t0 = performance.now();
        this.quickSort().then(quickAnswer => {
          console.log(quickAnswer);
          console.log('QuickSort took ' + (t1 - t0) + ' milliseconds.');
          var t1 = performance.now();
        });
        break;
      case 'quickSortRandom':
        this.quickSortRandom();
    }
  }

  stupidSwapThing(pivotValue, i, compareIndex, arr, dataSection) {
    return new Promise(res => {
      if (
        (this.pivotOptn === 'quickSortLast' && compareIndex < arr.length - 1) ||
        (this.pivotOptn === 'quickSortFirst' && compareIndex < arr.length)
      ) {
        if (arr[compareIndex] < pivotValue) {
          i++;
          var temp = arr[i];
          arr[i] = arr[compareIndex];
          arr[compareIndex] = temp;
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
        res({arr: arr, dataSection: dataSection, i: i});
      }
    });
  }

  innerForLoop(arr, dataSection, pivotValue) {
    return new Promise(res => {
      var compareIndex;
      var i;
      if (this.pivotOptn === 'quickSortLast') {
        compareIndex = 0;
        i = -1;
      } else if (this.pivotOptn === 'quickSortFirst') {
        compareIndex = 0;
        i = -1;
      } else {
        compareIndex = 0;
        i = -1;
      }
      var poo = this.stupidSwapThing(
        pivotValue,
        i,
        compareIndex,
        arr,
        dataSection
      );
      res(poo);
    });
  }

  quickSort() {
    return new Promise(res => {
      res(this.quickSortLast(this.currentar, this.data));
    });
  }

  //quick sort at first pivot
  async quickSortLast(arr, dataSection) {
    if (arr.length <= 1) {
      if (arr.length == 1)
        this.dataBarUtils.resizeBars(dataSection[0], arr[0], this.maxNum);
      return arr;
    } else {
      var pivotValue;
      if (this.pivotOptn === 'quickSortLast') pivotValue = arr[arr.length - 1];
      else if (this.pivotOptn === 'quickSortFirst') pivotValue = arr[0];
      else pivotValue = arr[arr.length - 1];
      var innerResult = await this.innerForLoop(arr, dataSection, pivotValue);
      arr = innerResult.arr;
      dataSection = innerResult.dataSection;
      var i = innerResult.i;
      var temp = arr[i + 1];
      if (this.pivotOptn === 'quickSortLast') {
        arr[i + 1] = arr[arr.length - 1];
        arr[arr.length - 1] = temp;
        this.dataBarUtils.swapBars(
          dataSection[i + 1],
          arr[i + 1],
          dataSection[arr.length - 1],
          temp,
          this.maxNum
        );
      } else if (this.pivotOptn === 'quickSortFirst') {
        arr[i + 1] = arr[0];
        arr[0] = temp;
        this.dataBarUtils.swapBars(
          dataSection[i + 1],
          arr[i + 1],
          dataSection[0],
          arr[0],
          this.maxNum
        );
      } else {
        arr[i + 1] = arr[arr.length - 1];
        arr[arr.length - 1] = temp;
        this.dataBarUtils.swapBars(
          dataSection[i + 1],
          arr[i + 1],
          dataSection[arr.length - 1],
          temp,
          this.maxNum
        );
      }
      var ans = [];
      if (this.pivotOptn === 'quickSortLast') {
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
      } else if (this.pivotOptn === 'quickSortFirst') {
        ans.push(arr[0]);
        ans.concat(
          this.quickSortLast(
            arr.slice(1, arr.length),
            dataSection.slice(1, arr.length)
          )
        );
      } else {
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
      }
      return ans;
    }
  }

  quickSortFirst() {}
  quickSortRandom() {}
}
export default QuickSort;
