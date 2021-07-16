export class PlanterDetails {
    pId:number;
    planterheight:number;
	planterCapacity:number;
	drinageHoles:number;
	planterColor:number;
	planterShape:number;
	planterStock:number;
	planterCost:number;
    constructor( 
        pId:number,
        planterheight:number,
        planterCapacity:number,
        drinageHoles:number,
        planterColor:number,
        planterShape:number,
        planterStock:number,
        planterCost:number){
            this.pId=pId
           this.planterheight= planterheight
            this.planterCapacity= planterCapacity
            this.drinageHoles=drinageHoles
            this.planterColor=planterColor
            this.planterShape=planterShape
            this.planterStock=planterStock
            this.planterCost=planterCost

    }
	
}
