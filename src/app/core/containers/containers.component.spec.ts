import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerComponent } from './containers.component';
import { FeatureModule } from 'src/app/feature/features.module';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core.module';

describe('ContainerComponent', () => {
  let component: ContainerComponent;
  let fixture: ComponentFixture<ContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CoreModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
