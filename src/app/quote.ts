export class Quote {
    showMore!: boolean;
    upVotes!: number;
    downVotes!: number
    date: Date;
    constructor(public id: number, public quote: string, public username: string, public author: string,
        public dte:Date){
        this.showMore = false;
        this.downVotes = 0;
        this.upVotes = 0;
        this.date = dte;
    }
}