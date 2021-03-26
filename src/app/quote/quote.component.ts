import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    {id:1,quote:"Never give up"},
    {id:2,quote:"Aspire to inspire before we expire"},
    {id:3,quote:"Love for all, hatred for none"},
    {id:4,quote:"Die with memories, not dreams"},
    {id:5,quote:"Never regret anything that made you smile"},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
