import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommitFormComponent } from './commit-form.component';
import { ShareModule } from 'src/app/share/share.module';
import { CommonModule } from '@angular/common';
import { CommitFormModule } from '../../commit-form.module';

describe('CommitFormComponent', () => {
  let component: CommitFormComponent;
  let fixture: ComponentFixture<CommitFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CommitFormModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommitFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
