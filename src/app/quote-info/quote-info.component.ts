import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';
import {Quote} from '../quote';
import{DateCountPipe} from '../date-count.pipe'

@Component({
  selector: 'app-quote-info',
  templateUrl: './quote-info.component.html',
  styleUrls: ['./quote-info.component.css']
})
export class QuoteInfoComponent implements OnInit {
  @Input() quote: Quote;
  @Output() isComplete = new EventEmitter<boolean>();

  quoteDelete(complete:boolean){
    this.isComplete.emit(complete);
}

  constructor() { }

  ngOnInit() {
  }

}
