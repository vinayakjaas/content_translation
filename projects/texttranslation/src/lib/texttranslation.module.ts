import { NgModule } from '@angular/core';
import { TexttranslationComponent } from './texttranslation.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TexttranslationComponent
  ],
  imports: [CommonModule, HttpClientModule , FormsModule],
  exports: [
    TexttranslationComponent
  ]
})
export class TexttranslationModule { }
