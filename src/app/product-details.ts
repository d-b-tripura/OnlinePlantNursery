export class ProductDetails {
    pId: number;
    productName: string;
    description: string;
    productType: string;

    constructor(pId:number, productName: string, description: string, productType: string) {
        this.pId = pId;
        this.productName = productName;
        this.description = description;
        this.productType = productType;
    }
}
