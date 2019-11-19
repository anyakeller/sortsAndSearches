import SortClass from './sortClass.js';
class MergeSort extends SortClass {
  constructor(ar, maxNum, data, dataBarUtils) {
    super(ar, maxNum, data, dataBarUtils);
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
    console.log(this);
    if (this.ispause) this.ispause = false;
    if (this.isreset) this.isreset = false;
    this.doSort()
      .then(sortFinished => {
        console.log(sortFinished);
      })
      .catch(poop => console.log(poop));
  }

  merge(ans, dataAns, f, l, part1, part2) {
    let first = part1.ans;
    let last = part2.ans;
    let firstData = part1.dataAns;
    let lastData = part2.dataAns;
    while (f < first.length && l < last.length) {
      if (first[f] < last[l]) {
        ans.push(first[f]);
        dataAns.push(firstData[f]);

        f++;
      } else {
        ans.push(last[l]);
        dataAns.push(lastData[l]);
        l++;
      }
    }

    if (f == first.length) {
      console.log(ans);
      return {
        ans: ans.concat(last.slice(l)),
        dataAns: dataAns.concat(lastData.slice(l))
      };
    } else if ((l = last.length)) {
      console.log(ans);
      return {
        ans: ans.concat(first.slice(f)),
        dataAns: dataAns.concat(firstData.slice(f))
      };
    } else {
      return {ans: ans, dataAns: dataAns};
    }
  }

  mergeSort(arr, dataSection) {
    if (arr.length > 1) {
      var end = arr.length - 1;
      var middle = Math.floor((end + 1) / 2);
      var part1 = this.mergeSort(
        arr.slice(0, middle),
        dataSection.slice(0, middle)
      );
      var part2 = this.mergeSort(
        arr.slice(middle, end + 1),
        dataSection.slice(middle, end + 1)
      );
      if (typeof part1 != 'undefined' && typeof part2 != 'undefined') {
        var mergeResult = this.merge([], [], 0, 0, part1, part2);
        return mergeResult;
      } else {
        console.log('both undefined ugh');
        return {ans: arr, dataAns: dataSection};
      }
    } else {
      console.log('ahhh');
      console.log(arr);
      return {ans: arr, dataAns: dataSection};
    }
  }

  //recursive method
  doSort() {
    return new Promise((res, rej) => {
      clearTimeout(this.currentTimeOut);
      this.currentTimeOut = null;
      console.log(this.mergeSort(this.currentar, this.data));
      res(true);
    });
  }
}
export default MergeSort;
