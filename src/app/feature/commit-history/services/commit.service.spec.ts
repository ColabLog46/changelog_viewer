import { TestBed } from '@angular/core/testing';

import { CommitService } from './commit.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('CommitService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule
    ],
  }));

  it('should be created', () => {
    const service: CommitService = TestBed.get(CommitService);
    expect(service).toBeTruthy();
  });
});
