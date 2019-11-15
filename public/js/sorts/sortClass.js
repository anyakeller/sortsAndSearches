export default class SortClass{
	constructor(ar,maxNum,data,resizeBarHeight,swapBars,timeOutThingResize,timeOutThingSwap){
		this.ar = ar;
		this.data = data;
		this.resizeBarHeight = resizeBarHeight;
		this.swapBars = swapBars;
		this.timeOutThingResize = timeOutThingResize;
		this.timeOutThingSwap = timeOutThingSwap;
		this.maxNum = maxNum;
		this.arleng = ar.length;
		this.sortStatus = false;
		this.ispause= true;
		this.isreset = true;
	}
}

