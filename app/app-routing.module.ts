import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {StartComponent} from './start_page/app.start'
import { SelectWordGroupComponent } from './select_word_group/app.select_word_group';
import { SelectWordsComponent } from './select_words/app.select_words';
import { ShowWordsComponent } from './show_words/app.show_words';
import { WriteWordsComponent } from './write_words/app.write_words';



const routes: Routes = [
  { path: '', redirectTo: '/start', pathMatch: 'full' },
  { path: 'start',  component: StartComponent },
  { path: 'select_word_group',  component: SelectWordGroupComponent },
  { path: 'select_words',  component: SelectWordsComponent },
  { path: 'show_words',  component: ShowWordsComponent },
  { path: 'write_words',  component: WriteWordsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
