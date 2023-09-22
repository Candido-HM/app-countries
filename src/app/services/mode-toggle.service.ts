import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { BehaviorSubject ,Observable } from 'rxjs';
import { StorageService, MODE_STORAGE_SERVICE } from './storage.service';
import { Mode } from './mode-theme';

@Injectable({
  providedIn: 'root'
})
export class ModeToggleService {

  private currentMode: Mode = Mode.LIGHT;
  private modeChangedSubject = new BehaviorSubject(this.currentMode);

  modeChanged$: Observable<Mode>

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(MODE_STORAGE_SERVICE) private storage: StorageService
  ) {
    this.modeChanged$ = this.modeChangedSubject.asObservable();
    this.init();
   }

   //Actualiza el modo actual y guarda en el local storage
   private updateCurrentMode(mode: Mode){
    this.currentMode = mode;
    this.modeChangedSubject.next(this.currentMode);
    this.storage.save(this.currentMode);
   }

   private init(){
    //Detectar la preferencia de modo del color del dispositivo
    const deviceMode = window.matchMedia("(prefers-color-sheme: dark)");
    let initMode = this.storage.get();

    if(!initMode){
      deviceMode.matches? (initMode = Mode.DARK) : (initMode = Mode.LIGHT);
    }
    this.updateCurrentMode(initMode);
    this.document.body.classList.add(this.currentMode);
   }

   toggleMode(){
    this.document.body.classList.toggle(Mode.LIGHT);
    this.document.body.classList.toggle(Mode.DARK);
    if(this.currentMode === Mode.LIGHT){
      this.updateCurrentMode(Mode.DARK)
    } else {
      this.updateCurrentMode(Mode.LIGHT);
    }
   }
}
