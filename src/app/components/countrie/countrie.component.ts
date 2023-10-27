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
            
                // this.router.params.subscribe(params => {
                //   let nameCode = params['code'];
                //   this.getCountrieCode(nameCode);
                // })

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

  codeCountrie(border: string){
    console.log(border);
    this.getCountrieCode(border);
  }

  getCountrieCode(code: string) {
    this.countriesService.getCountrieCode(code)
    .subscribe( reponse => {
      this.countrie = reponse
      console.log(this.countrie);
    })
  }

  // viewCountrie(code: any){
  //   // let nameCountrie: any;
  //   this.countriesService.getCountrieCode(code)
  //   .subscribe( reponse => {
  //     this.countrie = reponse
  //     // nameCountrie = this.countrie[0]['name']['common'];
  //     // console.log(this.countrie)
  //     // console.log(nameCountrie)
  //     this.rout.navigate(['/countrie'], code);
  //   })
    
  // }

}