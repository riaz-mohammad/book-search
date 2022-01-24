import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { SearchCardComponent } from './search-card/search-card.component';
import { WrapperDirective } from './wrapper.directive';
import { CancelButtonComponent } from './cancel-button/cancel-button.component';
import { CardComponent } from './card/card.component';
import { ExpandDirective } from './expand.directive';
import { SearchBarListComponent } from './search-bar-list/search-bar-list.component';
import { ListWrapperComponent } from './list-wrapper/list-wrapper.component';
import { ImageComponent } from './image/image.component';
import { CardHorizontalComponent } from './card-horizontal/card-horizontal.component';
import { CardVerticalComponent } from './card-vertical/card-vertical.component';
import { SpacerDirective } from './spacer.directive';
import { DescriptionPipe } from './words.pipe';
import { HorizontalDetailComponent } from './card-horizontal/horizontal-detail/horizontal-detail.component';
import { BookDescriptionComponent, } from './card-vertical/book-description/book-description';
import { BookDetailComponent } from './card-vertical/book-detail/book-detail.component';
import { BookThumbnailPipe } from './book-thumbnail.pipe';
import { BackArrowComponent } from './back-arrow/back-arrow.component';
import { StartSearchButtonComponent } from './start-search-button/start-search-button.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    SearchCardComponent,
    WrapperDirective,
    CancelButtonComponent,
    CardComponent,
    ExpandDirective,
    SearchBarListComponent,
    ListWrapperComponent,
    ImageComponent,
    CardHorizontalComponent,
    CardVerticalComponent,
    SpacerDirective,
    DescriptionPipe,
    HorizontalDetailComponent,
    BookDetailComponent,
    BookDescriptionComponent,
    BookThumbnailPipe,
    BackArrowComponent,
    StartSearchButtonComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
