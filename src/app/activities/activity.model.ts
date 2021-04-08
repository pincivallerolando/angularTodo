export class Activity{
    public _id: string;
    public description: string;
    public status: string;
    public from: Date;
    public to: Date;

    constructor(id: string, description: string, status: string){
        this._id = id;
        this.description = description;
        this.status = status;
        this.from = new Date();
        this.to = new Date();
    }
}