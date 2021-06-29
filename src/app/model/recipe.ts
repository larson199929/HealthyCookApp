export class Recipe {
    id: number;
    description: string;
    publication_date: Date;
    assessment: string;

    constructor(){
        this.id= 0;
        this.description= "";
        this.publication_date= new Date();
        this.assessment = "";
    }
}
