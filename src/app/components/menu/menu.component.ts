import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  menuFix: boolean = false;

  @HostListener('window:scroll', ['$event'])
  windowsScroll(event: any){
    const position = window.pageXOffset || document.documentElement.scrollTop || 0;

    this.menuFix = position > 100;
  }
}
