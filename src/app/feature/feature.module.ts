import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommitHistoryModule } from './commit-history/commit-history.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    CommitHistoryModule,
  ],
  exports: [
    CommitHistoryModule
  ]
})
export class FeatureModule {}
