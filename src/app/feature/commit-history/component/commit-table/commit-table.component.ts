import { Component, OnInit } from '@angular/core';
import { CommitService } from '../../services/commit.service';

@Component({
  selector: 'app-commit-table',
  templateUrl: './commit-table.component.html',
  styleUrls: ['./commit-table.component.css']
})
export class CommitTableComponent implements OnInit {

  commitList: any;

  constructor(private serviceCommit: CommitService) { }

  ngOnInit() {
    this.getCommitList();
  }

  getCommitList() {
    this.serviceCommit.getCommitList("ColabLog46","changelog_viewer",1).subscribe(
      (data: any) => {
        this.commitList = data;
      }
    );
  }

}
