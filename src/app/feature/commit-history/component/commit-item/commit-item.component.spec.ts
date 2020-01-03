import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommitItemComponent } from './commit-item.component';
import { ShareModule } from 'src/app/share/share.module';

describe('CommitItemComponent', () => {
  let component: CommitItemComponent;
  let fixture: ComponentFixture<CommitItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ShareModule
      ],
      declarations: [ CommitItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommitItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //it('should create', () => {
  //  expect(component).toBeTruthy();
  //});
});
