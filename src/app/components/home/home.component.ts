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
  public randomCountryIndices: number[] = [];

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

        // Generar índices aleatorios para seleccionar países
        this.randomContries(16); // Puedes ajustar la cantidad deseada
        
        // Mostrar países aleatorios
        this.showRandomCountries();
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  randomContries(count: number){
    // Genera índices aleatorios únicos
    const totalCountries = this.countries.length;
    const allIndices = Array.from({ length: totalCountries }, (_, i) => i);
    this.randomCountryIndices = [];

    for (let i = 0; i < count; i++) {
      const randomIndex = Math.floor(Math.random() * (totalCountries - i));
      this.randomCountryIndices.push(allIndices.splice(randomIndex, 1)[0]);
    }
  }

  showRandomCountries() {
    // Muestra solo los países seleccionados aleatoriamente
    const randomCountries = this.randomCountryIndices.map(index => this.countries[index]);
    this.countries = randomCountries;
  }
}
