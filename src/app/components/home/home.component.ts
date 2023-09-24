import { Component, OnInit } from '@angular/core';
import { CountriesService } from 'src/app/services/countries.service';
import { Countrie } from 'src/app/models/Countrie';
import { Global } from 'src/app/services/global';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [CountriesService]
})
export class HomeComponent implements OnInit {

  public countries: Countrie[];
  public url: string;

  public regiones = [ 'Africa', 'America', 'Asia', 'Europa', 'Oceania'];

  constructor(private _countriesService: CountriesService){
    this.countries = [];
    this.url = Global.url;
  }

  ngOnInit(): void {
    this.getCountries();
  }

  buscar( termino: string ) {
    console.log(termino);
  }

  selection( region: string ) {
    console.log(region);
  }

  getCountries(){
    this._countriesService.getCountries().subscribe(
      response  => {
        this.countries = response;
        console.log(this.countries);
      },
      error => {
        console.log(<any>error);
      }
    );
  }
}
