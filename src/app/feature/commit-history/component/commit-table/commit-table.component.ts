import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommitService } from '../../services/commit.service';

@Component({
  selector: 'app-commit-table',
  templateUrl: './commit-table.component.html',
  styleUrls: ['./commit-table.component.css']
})
export class CommitTableComponent implements OnInit, OnChanges {

  @Input() githubRepo: string;
  @Input() githubUser: string;

  commitList: any;

  constructor(private serviceCommit: CommitService) { }

  ngOnInit() {
    //this.getCommitList();
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("eerer")
    console.log(changes)
  }

  getCommitList() {
    this.serviceCommit.getCommitList(this.githubUser,this.githubRepo,1).subscribe(
      (data: any) => {
        this.commitList = data;
      }
    );
  }

}
