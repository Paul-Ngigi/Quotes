import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    {id:1,quote:"One day I will find the right words, and they will be simple.",username:"Paul Ngigi",author:"Jack Kerouac"},
    {id:2,quote:"Let me live, love, and say it well in good sentences.",username:"Ashley Wanjiru",author:"Sylvia Plath"},
    {id:3,quote:"The first draft is just you telling yourself the story.",username:"Stephen Kariuki",author:"Terry Pratchett"},
    {id:4,quote:"Start before you’re ready",username:"Mary Wangui",author:"Steven Pressfield"},
    {id:5,quote:"If you have no critics, you’ll likely have no success",username:"Joseph Kuria",author:"Malcolm X"},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
