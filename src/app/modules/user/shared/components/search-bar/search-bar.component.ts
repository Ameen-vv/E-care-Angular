import { Component,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  @Output() searchChange : EventEmitter<string> = new EventEmitter<string>();
  search:string = '';

  OnSearchChanges(){
    this.searchChange.emit(this.search);
  }
} 
