import SortClass from "./sortClass.js";
class BubbleSort extends SortClass{
  constructor() {
		super();
    this.issort = false;
		this.currentar = ar;
		this.bubbleCounter = 0;
		this.currentTimeOut = null;
  }
	bubbleSort() {
     //recursive method
		if (this.issort) return true;
		else {
			this.halp();
		}
	}

  async halp() {
    var prevnum = this.currentar[this.bubbleCounter];
    var isit = true;
    if (prevnum > this.currentar[this.bubbleCounter + 1]) {
      isit = false;
      this.currentar[this.bubbleCounter] = this.currentar[this.bubbleCounter + 1];
      this.currentar[this.bubbleCounter + 1] = prevnum;
			
      await this.swapBars(this.data[this.bubbleCounter], this.currentar[this.bubbleCounter], this.data[this.bubbleCounter + 1], this.currentar[this.bubbleCounter + 1], this.maxnum);
    }

    if (this.bubbleCounter == this.arleng - 1) this.bubbleCounter = 0;
		else this.bubbleCounter++; 
		this.issort = isit;
		this.bubbleSort();
  }
}
export default BubbleSort;
