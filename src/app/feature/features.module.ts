import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommitHistoryModule } from './commit-history/commit-history.module';
import { ShareModule } from '../share/share.module';

@NgModule({
  declarations: [
  ],
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
