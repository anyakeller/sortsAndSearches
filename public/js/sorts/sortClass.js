export default class SortClass{
	constructor(ar,maxNum,data,resizeBarHeight,swapBars){
		this.ar = ar;
		this.data = data;
		this.resizeBarHeight = resizeBarHeight;
		this.swapBars = swapBars;
		this.maxNum = maxNum;
		this.arleng = ar.length;
		this.sortStatus = false;
		this.pause= true;
	}
}

