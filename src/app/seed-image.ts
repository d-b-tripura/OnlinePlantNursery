export class SeedImage {
        commonName:string;
        bloomTime:string;
        image:Blob;
        constructor(
            commonName:string,
        bloomTime:string,
        image:Blob,
            )
            {
                this.commonName=commonName;
                this.bloomTime=bloomTime;
                this.image=image;
            }
    
    
}
