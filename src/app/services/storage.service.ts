import { Injectable, InjectionToken } from '@angular/core';
import { Mode } from './mode-theme';

export const MODE_STORAGE_SERVICE = new InjectionToken<ModeStorage>(
  "MODE_STORAGE"
);

export interface ModeStorage{
  save(mode: Mode): any;

  get(): Mode;
} 

@Injectable({
  providedIn: 'root'
})
export class StorageService implements ModeStorage {
  
  LOCAL_STORAGE_KEY = "mode-theme";

  save(mode: Mode): void {
    localStorage.setItem(this.LOCAL_STORAGE_KEY, mode.toString());
  }

  get(): Mode {
    return <Mode>localStorage.getItem(this.LOCAL_STORAGE_KEY) || undefined;
  }

}
