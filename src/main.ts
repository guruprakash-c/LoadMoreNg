import { Component, OnInit } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  template: `
  <div>
    <ul>
      @for(item of displayedItems; track item){
      <li>{{ item }}</li>
      }
    </ul>
    @if(showLoadMoreButton){
    <button (click)="loadMoreItems()">Load More</button>
    } @else{
      <p>no more item(s)...</p>
    }
  </div>
  `,
})
export class App implements OnInit {
  allItems: string[] = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 7', 'Item 8', 'Item 9', 'Item 10'];
  displayedItems: string[] = [];
  itemsPerPage: number = 3;
  currentPage: number = 1;
  ngOnInit(): void {
    this.loadMoreItems(); 
  }
  loadMoreItems(): void {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    const newItems = this.allItems.slice(startIndex, endIndex);
    this.displayedItems = [...this.displayedItems, ...newItems];
    this.currentPage++;
  }

  get showLoadMoreButton(): boolean {
    return this.displayedItems.length < this.allItems.length;
  }
}

bootstrapApplication(App);
