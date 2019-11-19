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

  mergeWhileLoop;

  merge(ans, dataAns, f, l, part1, part2, wherewasi) {
    let first = part1.ans;
    let last = part2.ans;
    let firstData = part1.dataAns;
    let lastData = part2.dataAns;
    while (f < first.length && l < last.length) {
      if (first[f] < last[l]) {
        ans.push(first[f]);
        dataAns.push(firstData[f]);
        this.dataBarUtils.resizeBars(
          this.data[wherewasi],
          ans[ans.length - 1],
          this.maxNum
        );
        f++;
      } else {
        ans.push(last[l]);
        dataAns.push(lastData[l]);
        this.dataBarUtils.resizeBars(
          this.data[wherewasi],
          ans[ans.length - 1],
          this.maxNum
        );
        l++;
      }
			wherewasi++;
    }

    if (l < last.length) {
      console.log(this.data);
      for (var position = l; position < last.length; position++) {
        console.log(wherewasi + position + ans.length);
        ans.push(last[position]);
        this.dataBarUtils.resizeBars(
          this.data[wherewasi],
          ans[ans.length - 1],
          this.maxNum
        );
				wherewasi++;
      }
      return {
        ans: ans,
        dataAns: dataAns.concat(lastData.slice(l))
      };
    } else if (f < first.length) {
      for (var position = f; position < first.length; position++) {
        console.log(wherewasi + position + ans.length);
        ans.push(first[position]);
        this.dataBarUtils.resizeBars(
          this.data[wherewasi],
          ans[ans.length - 1],
          this.maxNum
        );
				wherewasi++;
      }
      return {
        ans: ans,
        dataAns: dataAns.concat(firstData.slice(f))
      };
    } else {
      console.log('else');
      return {ans: ans, dataAns: dataAns};
    }
  }

  mergeSort(arr, dataSection, wherewasi) {
    if (arr.length > 1) {
      var end = arr.length - 1;
      var middle = Math.floor((end + 1) / 2);
      var part1 = this.mergeSort(
        arr.slice(0, middle),
        dataSection.slice(0, middle),
        wherewasi
      );
      var part2 = this.mergeSort(
        arr.slice(middle, end + 1),
        dataSection.slice(middle, end + 1),
        wherewasi + middle
      );
      var mergeResult = this.merge([], [], 0, 0, part1, part2, wherewasi);
      return mergeResult;
    } else {
      this.dataBarUtils.resizeBars(this.data[wherewasi], arr[0], this.maxNum);
      return {ans: arr, dataAns: dataSection};
    }
  }

  //recursive method
  doSort() {
    return new Promise((res, rej) => {
      clearTimeout(this.currentTimeOut);
      this.currentTimeOut = null;
      console.log(this.mergeSort(this.currentar, this.data, 0));
      res(true);
    });
  }
}
export default MergeSort;
