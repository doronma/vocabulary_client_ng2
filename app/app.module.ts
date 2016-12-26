import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './home/app.home';
import { StartComponent } from './start_page/app.start';
import { SelectWordGroupComponent } from './select_word_group/app.select_word_group';
import { SelectWordsComponent } from './select_words/app.select_words';
import { ShowWordsComponent } from './show_words/app.show_words';
import { WriteWordsComponent } from './write_words/app.write_words';


import { AppRoutingModule } from './app-routing.module'

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  declarations: [HomeComponent, StartComponent, SelectWordGroupComponent, SelectWordsComponent, ShowWordsComponent, WriteWordsComponent],
  bootstrap: [HomeComponent]
})
export class AppModule { }
