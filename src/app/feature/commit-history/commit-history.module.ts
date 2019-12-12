import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommitTableComponent } from './component/commit-table/commit-table.component';
import { CommitItemComponent } from './component/commit-item/commit-item.component';

@NgModule({
  declarations: [CommitTableComponent, CommitItemComponent],
  imports: [
    CommonModule
  ],
  exports : [
    CommitTableComponent
  ]
})
export class CommitHistoryModule { }
