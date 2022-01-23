
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap, take, catchError } from 'rxjs/operators';

export interface Book {
  id: string;
  webReaderLink: string;
  selfLink: string;
  searchInfo: {
    textSnippet: string;
  };
  volumeInfo: {
    title: string;
    authors: string[];
    categories: string[];
    description: string;
    publishedDate: string;
    publisher: string;
    pageCount: number;
    language: string;
    previewLink: string;
    imageLinks: {
      smallThumbnail: string;
      thumbnail: string;
    };
  };
}

type Books = {
  items: Book[];
}


@Injectable({
  providedIn: 'root',
})
export class BookService {
  private BOOKS_API = 'https://www.googleapis.com/books/v1/volumes';
  books$ = new BehaviorSubject<Book[] | null>(null);
  booksCopies$ = new BehaviorSubject<Book[] | null>(null);
  searching$ = new Subject<boolean>();
  constructor(private http: HttpClient) {}

  getBooks(search: string): void {
    this.searching$.next(true);
    this.http
      .get<Books>(this.BOOKS_API + `?q=${search}`)
      .pipe(
        map(({ items }) => items),
        tap((books) => this.books$.next(books)),
        take(1),
        catchError( _ => [])
    ).subscribe(_ => this.searching$.next(false));
  }

  getBook(book: string): Observable<Book> {
    // return this.http.get<Book>(this.BOOKS_API + `/${bookId}`);
    return this.http.get<Book>(book);
    
  }
}
