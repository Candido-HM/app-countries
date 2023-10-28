import { Component, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-countrie',
  templateUrl: './countrie.component.html',
  styleUrls: ['./countrie.component.scss']
})
export class CountrieComponent {
  countrie: any = {};

  constructor( private router: ActivatedRoute,
              private rout: Router,
              private countriesService: CountriesService){
                this.countrie = [];

    this.router.params.subscribe( params => {
      let name = params['name'];
      this.getCountrie(name);
    })
  }

  getCountrie(name: string){
    this.countriesService.getCountrie(name)
    .subscribe( response => {
        this.countrie = response[0]
      },
      error => {
        console.log(<any>error);
      }
    )
  }

  codeCountrie(border: string){
    this.getCountrieCode(border);
  }

  getCountrieCode(code: string) {
    let name: string
    this.countriesService.getCountrieCode(code)
    .subscribe( reponse => {
      this.countrie = reponse[0]
      name = this.countrie.name.common;
      this.rout.navigate(['/countrie', name]);
    })
  }

}