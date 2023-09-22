import { Component } from '@angular/core';
import { ModeToggleService } from 'src/app/services/mode-toggle.service';

@Component({
  selector: 'app-btn-theme',
  templateUrl: './btn-theme.component.html'
})
export class BtnThemeComponent {

  constructor(private modeToggleService: ModeToggleService){ }
  toggle(){
    this.modeToggleService.toggleMode();
  }
}
