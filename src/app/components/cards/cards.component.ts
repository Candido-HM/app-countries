import { Component, OnInit } from '@angular/core';
import { CountriesService } from 'src/app/services/countries.service';
import { Countrie } from 'src/app/models/Countrie';
import { Global } from 'src/app/services/global';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
  providers: [CountriesService]
})
export class CardsComponent implements OnInit {
  public countries: Countrie[];
  public url: string;
  public randomCountryIndices: number[] = [];
  public cards: any[] = [];

  constructor(private _countriesService: CountriesService){
    this.countries = [];
    this.url = Global.url;

  }

  ngOnInit(): void {
    this.getCountries();
  }

  getCountries(){
    this._countriesService.getCountries().subscribe(
      response  => {
        this.countries = response;
        // console.log(this.countries);

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
