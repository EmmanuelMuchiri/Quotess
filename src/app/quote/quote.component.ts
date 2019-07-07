import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote';
// import{DateCountPipe} from '../date-count.pipe'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    new Quote(1, 'I have no special talent. I am only passionately curious', 'Albert Einstein',new Date(2019,7,7),0,0),
    new Quote(2,'I do not fear computers. I fear lack of them','Isaac Asimov',new Date(2019,6,9),0,0)
  ];
  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  deleteQuote(isComplete, index){
    let toDelete=confirm(`Are you sure you want to do this?`)
    if (toDelete) {
      this.quotes.splice(index,1);
    }
  }

  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }

  constructor() { }

  ngOnInit() {
  }

}
