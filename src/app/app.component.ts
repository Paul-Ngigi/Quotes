import { Component } from '@angular/core';
import { Quote } from './quote'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes: Quote[] = [
    {id:1,quote:"Never give up"},
    {id:2,quote:"Aspire to inspire before we expire"},
    {id:3,quote:"Love for all, hatred for none"},
    {id:4,quote:"Die with memories, not dreams"},
    {id:5,quote:"Never regret anything that made you smile"},
  ]
}
