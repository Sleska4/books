/* Модуль для отображение яниформации о книге и работы с кнопками */

import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {BooksService} from '../shared/books.service';


@Component({
  selector: 'app-book-information',
  templateUrl: './book-information.component.html',
  styleUrls: ['./book-information.component.css'],
})

export class BookInformationComponent implements OnInit {
  constructor(private booksInformation: BooksService) { }
  bookInfo = this.booksInformation;
  copyArr = this.bookInfo.copyArr;
  ngOnInit(): void {
  }
  delBook(id: number): void{
    this.booksInformation.delBook(id);
  }

}
