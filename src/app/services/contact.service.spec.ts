import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { ContactService } from './contact.service';

describe('ContactService', () => {
  let service: ContactService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientModule] });
    service = TestBed.inject(ContactService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('path should be http://localhost:3001/contacts', () => {
    expect(service.baseEndPoint).toBe("http://localhost:3001/contacts");
  });
});
