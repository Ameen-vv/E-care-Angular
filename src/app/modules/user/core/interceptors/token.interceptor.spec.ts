import { TestBed } from '@angular/core/testing';

import { TokenInterceptor } from './token.interceptor';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';

fdescribe('TokenInterceptor', () => {

  let http:HttpClient;
  let interceptor:TokenInterceptor;
  let controller:HttpTestingController;

  beforeEach(() => TestBed.configureTestingModule({
    imports:[HttpClientTestingModule],
    providers: [
      TokenInterceptor,
      {
        provide: HTTP_INTERCEPTORS,
        useClass: TokenInterceptor,
        multi: true,
      }
      ]
  })
  );

  beforeEach(()=>{
    http = TestBed.inject(HttpClient);
    interceptor = TestBed.inject(TokenInterceptor);
    controller = TestBed.inject(HttpTestingController);
  })

  it('should be created', () => {
    const interceptor: TokenInterceptor = TestBed.inject(TokenInterceptor);
    expect(interceptor).toBeTruthy();
  });

  it('should add token to headers',()=>{
    const token = 'mockToken';
    const testUrl = '/test/test';
    spyOn(localStorage,'getItem').and.returnValue(token);
    http.get(testUrl).subscribe();
    const req = controller.expectOne(testUrl);
    expect(req.request.headers.has('authorization')).toBeTruthy();
    expect(req.request.headers.get('authorization')).toBe(token);
    req.flush({});
  })
});
