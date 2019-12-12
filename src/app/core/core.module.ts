import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureModule } from '../feature/feature.module';
import { ContainerComponent } from './component/container/container.component';

@NgModule({
  declarations: [ContainerComponent],
  imports: [
    CommonModule,
    FeatureModule,
  ],
  exports: [
    ContainerComponent
  ],
})
export class CoreModule { }
