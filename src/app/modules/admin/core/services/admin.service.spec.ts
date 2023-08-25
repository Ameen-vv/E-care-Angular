import { TestBed } from '@angular/core/testing';

import { AdminService } from './admin.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { getDepUrl } from '../../shared/constants/urls';
import { Mdoctors } from '../../../../testing/mockDatas/mockDatas';

fdescribe('AdminService', () => {
  let service: AdminService;
  let httpControl:HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]
    });
    service = TestBed.inject(AdminService);
    httpControl = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('get all doctors',()=>{
    service.getDep().subscribe((response)=>{
      expect(response.data).toBeTruthy();
    })

    const req = httpControl.expectOne(getDepUrl);
    req.flush({data:Mdoctors})
  })


});
