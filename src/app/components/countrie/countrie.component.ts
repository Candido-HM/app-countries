import { Component } from '@angular/core';
import { Countrie } from 'src/app/models/Countrie';
// import { Global } from 'src/app/services/global';
import { ActivatedRoute } from '@angular/router';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-countrie',
  templateUrl: './countrie.component.html',
  styleUrls: ['./countrie.component.scss']
})
export class CountrieComponent {
  // public countrie: Countrie[];
  // public url: string;
  countrie: any = {};

  constructor( private router: ActivatedRoute,
              private countriesService: CountriesService){
    // this.countrie = [];
    // this.url = Global.url;
    this.router.params.subscribe( params => {
      let name = params['name'];
      console.log(name);
      this.getCountrie(name);
    })
  }

  getCountrie(name: string){
    this.countriesService.getCountrie(name)
    .subscribe( response => {
        this.countrie = response[0]
        console.log(this.countrie);
      },
      error => {
        console.log(<any>error);
      }
    )
  }
}
