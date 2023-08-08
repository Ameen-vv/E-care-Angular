import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent {
  @Input() size:number = 10;
  getSize():string{
    return `w-${this.size}  h-${this.size}`
  }
}
