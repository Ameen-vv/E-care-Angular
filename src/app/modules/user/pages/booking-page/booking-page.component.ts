import { Component,OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DocTimings, DoctorModel } from 'src/app/core/Models/CommonModels';
import { UserService } from '../../core/services/user.service';
import { HotToastService } from '@ngneat/hot-toast';
import { Subscription } from 'rxjs';
import { PaymentVerification } from '../../core/models/userModels';

declare var Razorpay:any;

@Component({
  selector: 'app-booking-page',
  templateUrl: './booking-page.component.html',
  styleUrls: ['./booking-page.component.scss'],
})
export class BookingPageComponent implements OnDestroy {
  doctor!: DoctorModel;
  date!: Date | null;
  day!: string;
  time!: DocTimings[];
  isOpen: boolean = false;
  price!: number;
  appointmentId!: string;
  loading: boolean = false;
  selectedSlot!: string;
  orderId!:string;
  orderSub!:Subscription;
  payInitSub!:Subscription;
  payVerifySub!:Subscription;
  cancelSub!:Subscription;
  minDate:Date;
  maxDate:Date;

  appointmentForm!: FormGroup;

  constructor(private route: ActivatedRoute,private userService : UserService,private toast : HotToastService) {
    this.doctor = history.state;
    this.minDate = new Date();
    this.maxDate = new Date();
    this.maxDate.setMonth(this.minDate.getMonth() + 1);
  }

  ngOnDestroy(): void {
      this.orderSub.unsubscribe();
      this.payInitSub.unsubscribe();
      this.payVerifySub.unsubscribe();
  }
  
  handleDay(): void {
    if (this.date) {
      const dateObject = new Date(this.date);
      const dayOfWeek = dateObject.toLocaleDateString('en-US', {
        weekday: 'short',
      });
      switch (dayOfWeek) {
        case 'Sun':
          this.day = 'sunday';
          break;
        case 'Mon':
          this.day = 'monday';
          break;
        case 'Tue':
          this.day = 'tuesday';
          break;
        case 'Wed':
          this.day = 'wednesday';
          break;
        case 'Thu':
          this.day = 'thursday';
          break;
        case 'Fri':
          this.day = 'friday';
          break;
        case 'Sat':
          this.day = 'saturday';
          break;
        default:
          break;
      }
    }
    this.time = this.doctor.timings.filter((item) => item.day === this.day);
  }

  handleDateChange() {
    this.handleDay();
    this.selectedSlot = '';
  }

  handleSubmit():void{
    if(this.date && this.selectedSlot){
     this.orderSub = this.userService.createOrder({date:this.date,time:this.selectedSlot,doctorId:this.doctor._id}).subscribe(
        (response)=>{
          if(response.ok){
            this.isOpen = true;
            this.price = response.price;
            this.orderId = response.appointmentId;
          }else{
            this.toast.error(response.message)
          }  
        }
      )
     
    }
  }

  initiallizeRazPay(){
    const verifyPay = (res:PaymentVerification) => {
      this.payVerifySub = this.userService.verifyPayment(res,this.orderId).subscribe(
        (response)=>{
          if(response.signatureIsValid){
            this.isOpen = false;
            this.date = null;
            this.selectedSlot = '';
            this.toast.success('Payment Successfull')
          }else{
            this.toast.error('Payment failed please retry')
            this.date = null;
            this.selectedSlot = '';
            this.isOpen = false;
          } 
        }
        )
    }
    
    this.payInitSub = this.userService.initiallizePayment(this.orderId).subscribe(
      (response) => {
        const options = {
          "key": response.order.key,
          "amount": response.order.amount.toString(),
          "currency":response.order.currency, 
          "name": "E Care",
          "order_id":response.order.id,
          "handler":verifyPay,
          "theme": {
          "color": "#0AB3B8"
          }
          };
          let rzp1 = new Razorpay(options)
          rzp1.open()
      }
    )
  }

  cancel(){
    this.isOpen = false;
    this.date = null;
    this.selectedSlot = '';
    this.cancelSub = this.userService.cancelAppointment(this.orderId).subscribe(
      (response)=>{
        !response.ok && this.toast.error('Something Went Wrong');
      }
      )
  }
}
