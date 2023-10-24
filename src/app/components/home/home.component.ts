import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';
import { debounceTime, distinctUntilChanged, fromEvent, map, startWith } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {

  @ViewChild('searchInput')
  inputSearch?: ElementRef;

  public regiones = [ 'Africa', 'America', 'Asia', 'Europa', 'Oceania'];

  constructor(private _searchService: SearchService){
  }

  ngAfterViewInit(): void {
    fromEvent<any>(this.inputSearch?.nativeElement, 'keyup')
    .pipe(
      map(event => event?.target.value),
      startWith(''),
      debounceTime(200),
      distinctUntilChanged()
    ).subscribe(text => this._searchService.emitText(text))
  }

  ngOnInit(): void {
    this._searchService.textObservable.subscribe()
  }

  selection( region: string ) {
    console.log(region);
  }
}
