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

  mergeWhileLoop(ans, f, l, first, last, wherewasi) {
    return new Promise(res => {
      if (f < first.length && l < last.length) {
        if (first[f] < last[l]) {
          ans.push(first[f]);
          var woah = this.dataBarUtils.resizeBarsTimeout(
            this.data[wherewasi],
            ans[ans.length - 1],
            this.maxNum
          );
          this.currentTimeOut = woah.timeoutvalue;
          f++;
          woah.toomanypromises.then(helpme => {
            this.mergeWhileLoop(ans, f, l, first, last, wherewasi + 1).then(
              mergeWhileResult => {
                res(mergeWhileResult);
              }
            );
          });
        } else {
          ans.push(last[l]);
          var woah = this.dataBarUtils.resizeBarsTimeout(
            this.data[wherewasi],
            ans[ans.length - 1],
            this.maxNum
          );
          this.currentTimeOut = woah.timeoutvalue;
          l++;
          woah.toomanypromises.then(helpme => {
            this.mergeWhileLoop(ans, f, l, first, last, wherewasi + 1).then(
              mergeWhileResult => {
                res(mergeWhileResult);
              }
            );
          });
        }
      } else {
        res({ans: ans, f: f, l: l, wherewasi: wherewasi});
      }
    });
  }

  merge(ans, f, l, first, last, wherewasi) {
    return new Promise(res => {
      if (f < first.length && l < last.length) {
        this.mergeWhileLoop(ans, f, l, first, last, wherewasi).then(
          mergeWhileResult => {
            ans = mergeWhileResult.ans;
            f = mergeWhileResult.f;
            l = mergeWhileResult.l;
            wherewasi = mergeWhileResult.wherewasi;

            if (l < last.length) {
              for (var position = l; position < last.length; position++) {
                ans.push(last[position]);
                this.dataBarUtils.resizeBars(
                  this.data[wherewasi],
                  ans[ans.length - 1],
                  this.maxNum
                );
                wherewasi++;
              }
              res(ans);
            } else if (f < first.length) {
              for (var position = f; position < first.length; position++) {
                ans.push(first[position]);
                this.dataBarUtils.resizeBars(
                  this.data[wherewasi],
                  ans[ans.length - 1],
                  this.maxNum
                );
                wherewasi++;
              }
              res(ans);
            } else {
              console.log('else');
              res(ans);
            }
          }
        );
      }
    });
  }

  mergeSort(arr, wherewasi) {
    return new Promise(res => {
      if (arr.length > 1) {
        var end = arr.length - 1;
        var middle = Math.floor((end + 1) / 2);
        var part1 = this.mergeSort(arr.slice(0, middle), wherewasi);
        var part2 = this.mergeSort(
          arr.slice(middle, end + 1),
          wherewasi + middle
        );
        Promise.all([part1, part2]).then(values => {
          this.merge([], 0, 0, values[0], values[1], wherewasi).then(
            mergeResult => {
              res(mergeResult);
            }
          );
        });
      } else {
        this.dataBarUtils.resizeBars(this.data[wherewasi], arr[0], this.maxNum);
        res(arr);
      }
    });
  }

  //recursive method
  doSort() {
    return new Promise((res, rej) => {
      clearTimeout(this.currentTimeOut);
      this.currentTimeOut = null;
      console.log(this.mergeSort(this.currentar, 0));
      res(true);
    });
  }
}
export default MergeSort;
