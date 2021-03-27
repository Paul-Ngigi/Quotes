export class Quote {
    showMore!: boolean
    constructor(public id: number, public quote: string, public username: string, public author: string){
        this.showMore = false;
    }
}
