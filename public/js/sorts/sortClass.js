export default class SortClass{
	constructor(ar,data,resizeBarHeight,swapBars){
		this.ar = ar;
		this.data = data;
		this.resizeBarHeight = resizeBarHeight;
		this.swapBars = swapBars;
		this.maxNum = Math.max(...ar);
		this.arleng = ar.length;
	}
}

