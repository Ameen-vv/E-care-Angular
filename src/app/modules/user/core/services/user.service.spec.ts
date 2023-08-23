import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { UserService } from './user.service';
import { getDoctorsUrl, userSignInUrl } from '../../shared/constants/urls';
import { Mdoctors } from '../../../../testing/mockDatas/mockDatas'
import { UserSignIn } from '../models/userModels';

describe('UserService', () => {
  let service: UserService;
  let httpControl:HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]
    });
    service = TestBed.inject(UserService);
    httpControl = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('get all doctors',()=>{
    service.getDoctors('','').subscribe(
      (response)=>{
        expect(response.data).toBeTruthy();
        expect(response.count).toBeGreaterThan(0);
      }
    )

    const Mreq = httpControl.expectOne(`${getDoctorsUrl}?department=${''}&search=${''}`);
    Mreq.flush({data:Mdoctors,count:2});
      
  })

  it('user login check',()=>{
    let user:UserSignIn={
      email:'mock@email.com',
      password:'123456'
    }
    service.userSignIn(user).subscribe((response)=>{
      expect(response.ok).toBeTrue();
    })
    const mockReq = httpControl.expectOne(userSignInUrl);

    expect(mockReq.request.method).toBe('POST');
    
    expect(mockReq.request.body).toEqual(user);
    
    mockReq.flush({ok:true,message:'',token:''});
  })
  

  afterEach(()=>{
    httpControl.verify();
  })

});
