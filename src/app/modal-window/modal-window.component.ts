import {Component, NgModule, OnInit} from '@angular/core';
import {BooksService} from '../shared/books.service';
import {FormControl} from '@angular/forms';



@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.css']
})

export class ModalWindowComponent implements OnInit {
  nameControl: FormControl;
  authorControl: FormControl;
  textControl: FormControl;
  pagesControl: FormControl;
  yearControl: FormControl;
  constructor(public booksInformation: BooksService) {
  }

  ngOnInit(): void {                        // Почему в ангуляре такие заморочки с простыми формами и почему я не могу сделать кастомный value из переменной
    this.nameControl = new FormControl('');
    this.authorControl = new FormControl('');
    this.textControl = new FormControl('');
    this.pagesControl = new FormControl('');
    this.yearControl = new FormControl('');
  }
  modalWindow(e): void {
    e.preventDefault();
    const {booksInformation: info} = this;
    if(info.modalWindow === 1){
      info.e = info.delE;
    }
    if (!this.nameControl.value || !this.authorControl.value) {
      alert('Некоректный ввод!');
      return;
    }
    const {authorControl, nameControl, textControl, pagesControl, yearControl} = this
    const el = {
      id: null,
      author: authorControl.value,
      bookName: nameControl.value,
      textContent: textControl.value,
      numberOfPages: pagesControl.value,
      year: yearControl.value
    };
    if(info.modalWindow === 1){
      el.id = Math.random();
      info.addBook(el);
    } else if(info.modalWindow === 2){
      const index = info.copyArr.findIndex(t => t.id === info.e.id);
      info.copyArr[index] = el;
      info.books = JSON.parse(JSON.stringify(info.copyArr));
    }
    setTimeout(() => info.modalWindow = 0, 1000)
    info.e = info.delE;
  }
}
