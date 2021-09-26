export class Order {
	id: number = -1;
	orderName: string = "";
	price?: number = null as any;
	discounted: boolean = false;
	isDiscountPercentage: number = 5.0;

	clone():Order {
	    let cloneObj = new Order();
	    cloneObj.id = this.id;
	    cloneObj.orderName = this.orderName;
	    cloneObj.price = this.price;
	    cloneObj.discounted = this.discounted;
	    cloneObj.isDiscountPercentage = this.isDiscountPercentage;
	    return cloneObj;
	}
}