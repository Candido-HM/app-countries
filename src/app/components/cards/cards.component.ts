import { Component, OnInit } from '@angular/core';
import { CountriesService } from 'src/app/services/countries.service';
import { Countrie } from 'src/app/models/Countrie';
import { Global } from 'src/app/services/global';
import { SearchService } from 'src/app/services/search.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
  providers: [CountriesService]
})
export class CardsComponent implements OnInit{
  public countries: Countrie[];
  public url: string;
  public randomCountryIndices: number[] = [];
  public cards: any[] = [];
  text: string = '';
  selectedItem: string = '';
  loading: boolean;

  constructor(private _countriesService: CountriesService,
              private _searchService: SearchService,
              private router: Router){
    this.countries = [];
    this.url = Global.url;
    this.loading = true;
  }

  ngOnInit(): void {
    this.getCountries();
    this._searchService.textObservable.subscribe(text => {
      this.getCountrie(text);
      if(text === '') {
        this.getCountries();
      }
    })  
    this._searchService.selectedObservable.subscribe(selectedItem => {
      this.getCountrieRegion(selectedItem);
      if(selectedItem === '') {
        this.getCountries();
      } 
      else if(selectedItem == 'all'){
        this.getCountries();
      }
    }) 
  }


  filter(characters: string){
    this.text += characters
    if(characters !== ''&& characters.length >=2){
      this.getCountrie(characters);
    } 
    else if (this.text === '') {
      this.getCountries();
    }
  }


  getCountries(){
    this._countriesService.getCountries().subscribe(
      response  => {
        this.countries = response;

        // Generar índices aleatorios para seleccionar países
        this.randomContries(24); // Puedes ajustar la cantidad deseada
        
        // Mostrar países aleatorios
        this.showRandomCountries();
        this.loading = false;
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

  getCountrie(name: string){
    this._countriesService.getCountrie(name).subscribe(
      response => {
        this.countries = response
      },
      error => {
        console.log(<any>error);
      }
    )
  }

  viewCountrie(name: string){
    let nameCoutrie;
    nameCoutrie = name;
    this.router.navigate(['/countrie', nameCoutrie]);
  }

  getCountrieRegion(region : string){
    this._countriesService.getCountrieRegion(region).subscribe(
      response => {
        this.countries = response
      },
      error => {
        console.log(<any>error);
      }
    )
  }

}
