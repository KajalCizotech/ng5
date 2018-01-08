import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	
  itemCount: number;
  goalTxt: string;

  goals= [];

  constructor(private _data: DataService) { }

  ngOnInit() {
  	
  	this._data.goal.subscribe(res => this.goals = res);
  	this.itemCount = this.goals.length;
  	this._data.changeGoal(this.goals);
  	
  }

  addItem (){
  		this.goals.push(this.goalTxt);
  		this.itemCount = this.goals.length;
  		this._data.changeGoal(this.goals);
  	}

}
