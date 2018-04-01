import { TestBed, inject } from '@angular/core/testing';
import { Http, Response } from '@angular/http';
import { ReplaySubject } from 'rxjs';
import { Observable } from 'rxjs/Observable';
import { UsersService } from './users.service';

describe('UsersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsersService, Http]
    });
  });

  it('should be created', inject([UsersService], (service: UsersService) => {
    expect(service).toBeTruthy();
  }));
});
