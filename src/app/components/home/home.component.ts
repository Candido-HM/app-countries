import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';
import { debounceTime, distinctUntilChanged, fromEvent, map, startWith } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {

  @ViewChild('searchInput') inputSearch?: ElementRef;
  @ViewChild('region') teams?: ElementRef;
  selectRegion: string;

  public regiones = [ 'Africa', 'America', 'Asia', 'Europe', 'Oceania'];

  constructor(private _searchService: SearchService){
    this.selectRegion = '';
  }

  ngAfterViewInit(): void {
    fromEvent<any>(this.inputSearch?.nativeElement, 'keyup')
    .pipe(
      map(event => event?.target.value),
      startWith(''),
      debounceTime(400),
      distinctUntilChanged()
    ).subscribe(text => this._searchService.emitText(text))

    fromEvent<any>(this.teams?.nativeElement, 'change')
    .pipe(
      map(event => event?.target.value),
        startWith(''),
        debounceTime(100),
        distinctUntilChanged()
    ).subscribe( selected => this._searchService.selectedEmit(selected))
  
  }

  ngOnInit(): void {
    this._searchService.textObservable.subscribe();
    this._searchService.selectedObservable.subscribe();
  }

}
