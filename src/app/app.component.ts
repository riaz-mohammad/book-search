
import { Component, ViewChild } from '@angular/core';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { Book, BookService } from './book.service';
import { searchBarList } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [searchBarList],
})
export class AppComponent {
  @ViewChild(SearchBarComponent, { static: true })
  searchBar!: SearchBarComponent;
  showSearchList!: boolean;

  constructor(public bookService: BookService) {}

  findBook(book: Book): void {
    this.searchBar.searchValue(book.volumeInfo.title);
    this.bookService.booksCopies$.next(this.bookService.books$.value);
  }
}
