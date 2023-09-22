import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StorageService, MODE_STORAGE_SERVICE } from 'src/app/services/storage.service';
import { BtnThemeComponent } from './btn-theme.component';
import { ModeToggleService } from 'src/app/services/mode-toggle.service';


@NgModule({
  declarations: [BtnThemeComponent],
  providers: [
    ModeToggleService,
    {
      provide: MODE_STORAGE_SERVICE,
      useClass: StorageService
    }
  ],
  imports: [
    CommonModule
  ],
  exports: [BtnThemeComponent]
})
export class BtnThemeModule { }
