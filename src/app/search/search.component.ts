import { Component, OnInit } from '@angular/core';
import {BooksService} from '../shared/books.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  constructor(public booksInformation: BooksService) { }

  ngOnInit(): void {
  }
  select(e): void {
    const R = []
    const {booksInformation: info} = this;
    const target = e.target.value;
    info.copyArr = JSON.parse(JSON.stringify(info.books));
    if (target === 'all'){
      return
    } else{
      const res = info.books.reduce((a, b) => {
        return a + (b[target] + ',');
      }, '');                                                                     // Создает массив из значений и отбрасывает пустую строчку
      res.split(',').sort().splice(1).forEach(el => {                             // Перебирает эти значения
        const index = info.copyArr.findIndex(element => element[target] === el)   // Ищет индекс по ключу
          info.copyArr[index][target] = false;                                    // Не костыль а фича
          R.push(info.books[index]);
      });
    }
    info.copyArr = R;
  }

  search(e): void{
    const target = e.target.value;
    console.log(target.length !== 0);
    if (!target){
      this.booksInformation.copyArr = JSON.parse(JSON.stringify(this.booksInformation.books));
      return;
    }
    const res = this.booksInformation.books.filter(el => el.bookName.search(target) !== -1 || el.author.search(target) !== -1);
    this.booksInformation.copyArr = res;
  }

}
