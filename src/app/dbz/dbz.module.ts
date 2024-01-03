import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './pages/main-page.component';
import { ListCharactersComponent } from './components/list-characters/list-characters.component';
import { AddCharactersComponent } from './components/add-characters/add-characters.component';



@NgModule({
  declarations: [
    MainPageComponent,
    ListCharactersComponent,
    AddCharactersComponent,
  ],
  exports: [
    MainPageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }
