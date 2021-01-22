import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RenderBooksComponent } from './render-books/render-books.component';
import { BookInformationComponent } from './book-information/book-information.component';
import { ModalWindowComponent } from './modal-window/modal-window.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    RenderBooksComponent,
    BookInformationComponent,
    ModalWindowComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
