export default class SortClass{
	constructor(ar,maxNum,data,dataBarUtils){
		this.ar = ar;
		this.data = data;
		this.dataBarUtils = dataBarUtils;
		this.maxNum = maxNum;
		this.arleng = ar.length;
		this.sortStatus = false;
		this.ispause= true;
		this.isreset = true;
	}
}

