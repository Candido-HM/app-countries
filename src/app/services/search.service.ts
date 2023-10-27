import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private textSubject: BehaviorSubject<string>
  public textObservable: Observable<string>
  private selectRegion: BehaviorSubject<string>
  public selectedObservable: Observable<string>

  constructor() { 
    this.textSubject = new BehaviorSubject('');
    this.textObservable = this.textSubject.asObservable();
    this.selectRegion = new BehaviorSubject('');
    this.selectedObservable = this.selectRegion.asObservable();
  }

  emitText(chars: string){
    this.textSubject.next(chars);
  }

  selectedEmit(region: string){
    this.selectRegion.next(region);
  }
}
