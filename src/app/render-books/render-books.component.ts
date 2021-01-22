import {Component, OnInit} from '@angular/core';
import {BooksService} from '../shared/books.service';
import {state} from '@angular/animations';


@Component({
  selector: 'app-render-books',
  templateUrl: './render-books.component.html',
  styleUrls: ['./render-books.component.css']
})
export class RenderBooksComponent implements OnInit {


  constructor(public booksInformation: BooksService) { }

  ngOnInit(): void {
  }

  bookClick(id: number): void{
    this.booksInformation.bookSelect(id);
  }
}
