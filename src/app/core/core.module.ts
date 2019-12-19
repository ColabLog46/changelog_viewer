import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureModule } from '../feature/features.module';
import { ContainerComponent } from './containers/containers.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [ContainerComponent],
  imports: [
    CommonModule,
    FeatureModule,
    BrowserAnimationsModule
  ],
  exports: [
    ContainerComponent
  ],
})
export class CoreModule { }
