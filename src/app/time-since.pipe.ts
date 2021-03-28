import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeSince'
})
export class TimeSincePipe implements PipeTransform {

  seconds!:number;
  minutes!:number;
  hours!:number;
  days!:number;
  transform(date:Date): String {
    this.seconds = new Date().getSeconds() - date.getSeconds();
    this.minutes = new Date().getMinutes() - date.getMinutes();
    this.hours = new Date().getHours() - date.getHours();
    this.days = date.getDay() - new Date().getDay() ;

    return `${this.days} days, ${this.hours} hours, ${this.minutes} minutes, ${this.seconds} seconds ago`;
  }
}