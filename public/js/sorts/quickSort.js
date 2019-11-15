import SortClass from './sortClass.js';
class QuickSort extends SortClass {
  constructor(ar, maxNum, data, resizeBarHeight, swapBars) {
    super(ar, maxNum, data, resizeBarHeight, swapBars);
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
        console.log(this.quickSortLast(this.currentar));
        break;
      case 'quickSortLast':
        console.log(this.currentar);
        console.log(this.quickSortLast(this.currentar));
        break;
      case 'quickSortRandom':
        this.quickSortRandom();
    }
  }

  //quick sort at first pivot
  quickSortLast(arr) {
    console.log('current ar');
    console.log(arr);

    if (arr.length <= 1) return arr;
    else {
      var pivotValue = arr[arr.length - 1];
      var i = -1;
      for (
        var compareIndex = 0;
        compareIndex < arr.length - 1;
        compareIndex++
      ) {
        if (arr[compareIndex] < pivotValue) {
          i++;
          var temp = arr[i];
          arr[i] = arr[compareIndex];
          arr[compareIndex] = temp;
          console.log('swap1');
          console.log(arr);
        }
      }
      var temp = arr[i + 1];
      arr[i + 1] = arr[arr.length - 1];
      arr[arr.length - 1] = temp;
      console.log('swap2');
      console.log(arr);

      var ans = this.quickSortLast(arr.slice(0, i + 1));
      ans.push(arr[i + 1]);
      return ans.concat(this.quickSortLast(arr.slice(i + 2, arr.length)));
    }
  }
  quickSortFirst() {}
  quickSortRandom() {}
}
export default QuickSort;
