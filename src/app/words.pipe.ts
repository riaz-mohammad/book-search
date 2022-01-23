import { Book } from './book.service';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'description',
})
export class DescriptionPipe implements PipeTransform {
  transform(book: Book): string {
    return book.volumeInfo.description;
  }
}
