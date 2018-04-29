import { Component, OnInit } from '@angular/core';
import { Idea } from '../idea';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  ideas: Idea[];

  constructor() {
    this.ideas = [
      {id: 1, description: 'cosaloca', ease: 10, confidence: 10, impact: 10, average: 10},
      {id: 2, description: 'cosaloca2', ease: 10, confidence: 5, impact: 10, average: 20},
      {id: 3, description: 'cosaloca3', ease: 1, confidence: 6, impact: 10, average: 100},
    ];
  }

  ngOnInit() {
  }

}
