import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-commit-form',
  templateUrl: './commit-form.component.html',
  styleUrls: ['./commit-form.component.css']
})
export class CommitFormComponent implements OnInit {

  @Output() githubUserNameToChild = new EventEmitter<string>();
  @Output() githubRepoToChild = new EventEmitter<string>();

  githubUserName: string;
  githubRepo: string;

  constructor() { }

  ngOnInit() {
    this.githubUserName = '';
    this.githubRepo = '';
  }

  saveRepo($event) {
    console.log($event);
    this.githubRepoToChild.emit(this.githubRepo);
  }

  saveCommitUserName($event){
    console.log($event);
    this.githubRepoToChild.emit(this.githubUserName);
  }

}
