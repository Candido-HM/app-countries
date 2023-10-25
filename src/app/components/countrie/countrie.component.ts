import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountriesService } from 'src/app/services/countries.service';
import { Countrie } from 'src/app/interface/countrie1.interface';

@Component({
  selector: 'app-countrie',
  templateUrl: './countrie.component.html',
  styleUrls: ['./countrie.component.scss']
})
export class CountrieComponent {
  countrie: any = {};
  // countrie1: Countrie = [];

  constructor( private router: ActivatedRoute,
              private countriesService: CountriesService){
                this.countrie = [];
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
