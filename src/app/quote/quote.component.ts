import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    // new Quote(1, 'Watch finding Nemo', 'Find an online version and watch merlin find his son',new Date(2019,3,14)),
    // new Quote(2,'Buy Cookies','I have to buy cookies for the parrot',new Date(2019,6,9))
  ];
  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  deleteGoal(isComplete, index){
    let toDelete=confirm(`Are you sure you want to do this?`)
    if (toDelete) {
      this.quotes.splice(index,1);
    }
  }

  addNewGoal(goal){
    let goalLength = this.quotes.length;
    goal.id = goalLength+1;
    goal.completeDate = new Date(goal.completeDate)
    this.quotes.push(goal)
  }

  constructor() { }

  ngOnInit() {
  }

}
