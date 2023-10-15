import { Component, OnInit } from '@angular/core';
import { CountriesService } from 'src/app/services/countries.service';
import { Countrie } from 'src/app/models/Countrie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public countries: Countrie[];

  public regiones = [ 'Africa', 'America', 'Asia', 'Europa', 'Oceania'];

  constructor(private _countriesService: CountriesService){
    this.countries = [];
    // this.url = Global.url;
  }

  ngOnInit(): void {
    console.log(this.countries);
  }

  buscar( search: string ) {
    // this._countriesService.getCountrie(search).subscribe( (response : any) => {
      // this.countries = response;
      // console.table(this.countries);
    // })
    console.log(search);
  }

  selection( region: string ) {
    console.log(region);
  }
}
