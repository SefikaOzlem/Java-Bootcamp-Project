export class Sponsor{
    private sponsorName:string;
    private sponsorDetail!:string;

    constructor(sponsorName:string) {
        this.sponsorName=sponsorName;
    }
    get SponsorName():string{
        return this.sponsorName;
    }
    set SponsorName(sponsorName:string){
        this.sponsorName=sponsorName;
    }
    get SponsorDetail():string{
        return this.sponsorDetail;
    }
    set SponsorDetail(_sponsorDetail:string){
        this.sponsorDetail=_sponsorDetail;
    }

}