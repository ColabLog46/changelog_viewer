import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommitHistoryModule } from './commit-history/commit-history.module';
import { ShareModule } from '../share/share.module';

@NgModule({
  imports: [
    CommonModule,
    CommitHistoryModule,
    ShareModule
  ],
  exports: [
    CommitHistoryModule
  ]
})
export class FeatureModule {}
