import { Component,  OnInit, Input ,Output,EventEmitter } from '@angular/core';
import { HotToastService } from '@ngneat/hot-toast';
import { DocTimings } from 'src/app/core/Models/CommonModels';

@Component({
  selector: 'app-doctor-timings',
  templateUrl: './doctor-timings.component.html',
  styleUrls: ['./doctor-timings.component.scss'],
})
export class DoctorTimingsComponent {

  @Input() timings: DocTimings[] = []; // Replace with appropriate type
  startTime: string = '';
  endTime: string = '';
  slots!: number;
  day:string = '';
  @Output() onFormSubmit = new EventEmitter();
  @Output() onSlotDel = new EventEmitter();

  constructor(private toast : HotToastService) {}


  handleSubmit(): void {
    if(this.day && this.slots && this.startTime && this.endTime){
      this.onFormSubmit.emit({day:this.day,slots:this.slots,startTime:this.startTime,endTime:this.endTime})
    }else{
      this.toast.error('Please fill all form')
    }
  }


  handleStartTimeChange(event: string): void {
    if (this.endTime) {
      const check = this.checkTimeValidity(event, this.endTime);
      if (!check) {
        this.toast.error('Please Select Proper Times');
        this.endTime = '';
        this.startTime = '';
      } else {
        this.startTime = event;
      }
    }else {
      this.startTime = event;
    }
  }

  handleEndTimeChange(event: string): void {
    if (this.startTime) {
      const check = this.checkTimeValidity(this.startTime, event);
      if (!check) {
        this.toast.error('Please Select Proper Times');
        this.endTime = '';
        this.startTime = '';
      } else {
        this.endTime = event;
      }
    } else {
      this.endTime = event;
    }
  }

  deleteSlot(index: number): void {
    this.onSlotDel.emit(this.timings[index]);
  }

  checkTimeValidity(startTime: string, endTime: string): boolean {
    const start = new Date(`01/01/2000 ${startTime}`);
    const end = new Date(`01/01/2000 ${endTime}`);

    return start < end;
  }
}
