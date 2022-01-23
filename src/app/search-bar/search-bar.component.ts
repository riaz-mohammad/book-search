import { trigger, transition, style, animate } from '@angular/animations';
import { BookService } from './../book.service';
import { FormControl } from '@angular/forms';

import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search-bar',
  template: `
    <input placeholder="Search..." [formControl]="search" #input />
    <ng-container *ngIf="search.value">
      <app-cancel-button (click)="cancel()" @button>
        {{ (bookService.searching$ | async) ? 'Searching...' : 'Cancel' }}
      </app-cancel-button>
    </ng-container>
  `,
  styles: [
    `
      :host {
        display: block;
        height: 60px;
        width: 100%;
        position: relative;
        z-index: 200;
        border-radius: 35px;
        box-sizing: border-box;
        transition: all 300ms ease;
        
      }
      input::placeholder {
        color: rgba(255, 255, 255, 0.5);
        transition: all 300ms ease;
      }

      input {
        color: white;
        box-sizing: border-box;
        padding-left: 30px;
        font-size: 1rem;
        outline: none;
        border: none;
        display: block;
        width: 100%;
        height: 100%;
        border-radius: 30px;
        background-color: rgba(0, 0, 0, 20%);
        transition: all 300ms ease;
        border: 1px solid rgba(0, 0, 0, 0.1);
        box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.2);
      }

      input:focus {
        background-color: rgba(0, 0, 0, 30%);
      }

      input:focus::placeholder {
        color: rgba(255, 255, 255, 0.8);
      }

      app-cancel-button {
        background: rgba(0, 0, 0, 20%);
        position: absolute;
        right: 4%;
        top: 25%;
        padding: 10px;
      }
    `,
  ],

  animations: [
    trigger('button', [
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'translateX(-50%)',
        }),

        animate(
          '500ms ease',
          style({
            opacity: 1,
            transform: 'translateX(0%)',
          })
        ),
      ]),

      transition(':leave', [
        animate('500ms ease', style({
          opacity: 0,
          transform: 'translateX(-50%)'
        }))
      ])
    ]),
  ],
})
export class SearchBarComponent implements OnInit, OnDestroy {
  @ViewChild('input', { static: true }) input!: ElementRef<HTMLInputElement>;
  search = new FormControl('');
  sub!: Subscription;
  constructor(public bookService: BookService) {}

  cancel(): void {
    this.search.setValue('');
    this.bookService.books$.next(null);
    this.bookService.booksCopies$.next(null);
    this.input.nativeElement.focus();
  }

  ngOnInit() {
    this.sub = this.search.valueChanges
      .pipe(distinctUntilChanged(), debounceTime(400))
      .subscribe((search) => {
        if (!search) {
          this.bookService.books$.next(null);
          this.bookService.booksCopies$.next(null);
          return;
        }
        this.bookService.getBooks(search);
      });
  }

  searchValue(value: string): void {
      value.length > 60 ?
      this.search.setValue(value.slice(0, 55) + '...') :
      this.search.setValue(value);
  }
    

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }
}
