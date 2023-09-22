import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnThemeModule } from './btn-theme/btn-theme.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BtnThemeModule
  ],
  exports: [BtnThemeModule]
})
export class LibThemeModule { }
