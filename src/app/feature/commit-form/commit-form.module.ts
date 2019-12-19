import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommitFormComponent } from './components/commit-form/commit-form.component';
import { ShareModule } from '../../share/share.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [CommitFormComponent],
  imports: [
    CommonModule,
    ShareModule,
    BrowserAnimationsModule
  ],
  exports: [CommitFormComponent]
})
export class CommitFormModule { }
