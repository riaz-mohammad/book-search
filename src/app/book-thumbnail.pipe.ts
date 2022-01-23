import { Pipe, PipeTransform } from '@angular/core';
import { Book } from './book.service';

@Pipe({
  name: 'bookThumbnail',
})
export class BookThumbnailPipe implements PipeTransform {
  transform({ volumeInfo: { imageLinks } }: Book): string  {
     return (imageLinks?.smallThumbnail || imageLinks?.thumbnail) || '';
    
  }
}
