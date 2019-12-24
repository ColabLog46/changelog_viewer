import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommitTableComponent } from './commit-table.component';
import { ShareModule } from 'src/app/share/share.module';
import { CommitHistoryModule } from '../../commit-history.module';

describe('CommitTableComponent', () => {
  let component: CommitTableComponent;
  let fixture: ComponentFixture<CommitTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CommitHistoryModule,
        ShareModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommitTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
