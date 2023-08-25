import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent {
  @Input() size:number = 10;
  getSizeStyles(): { [styleName: string]: string } {
    const sizeInPx = `${this.size}px`;
    return {
      width: sizeInPx,
      height: sizeInPx
    };
  }
}
