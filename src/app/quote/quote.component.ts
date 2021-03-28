import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(1,"One day I will find the right words, and they will be simple","Paul Ngigi",'"Jack Kerouac"',
      new Date(2019, 12, 12)),
    new Quote(2,"Let me live, love, and say it well in good sentences","Ashley Wanjiru",'"Sylvia Plath"',
      new Date(2021, 2, 2)),
    new Quote(3,"The first draft is just you telling yourself the story","Stephen Kariuki",'"Terry Pratchett"',
      new Date(2020, 11, 11)),
    new Quote(4,"Start before you’re ready","Mary Wangui",'"Steven Pressfield"', new Date(2021, 3, 28)),
    new Quote(5,"If you have no critics, you’ll likely have no success","Joseph Kuria",'"Malcolm X"', 
      new Date(2021, 1, 1)),
  ];

  toggleDetails(index: number){
    this.quotes[index].showMore = !this.quotes[index].showMore;
  }

  deleteGoal(isComplete: boolean, index: number){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].quote}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }

  addNewQuote(quote: any){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+=1;
    this.quotes.push(quote)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
