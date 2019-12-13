import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './containers.component.html',
  styleUrls: ['./containers.component.css']
})
export class ContainerComponent implements OnInit {

  githubUserName: string
  githubRepo: string;

  constructor() { }

  ngOnInit() {
  }

  updateUserName($event){
    this.githubUserName = $event;
  }

  updateRepo($event){
    this.githubRepo = $event;
  }

}
