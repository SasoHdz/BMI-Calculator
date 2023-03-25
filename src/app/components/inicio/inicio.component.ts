import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent {
  peso: number = 60;
  edad: number = 25;
  altura: number = 170;
  sexo: string = '';

  cambiarAltura(event:any){
    this.altura=event.target.value;
  }

  femenino(){
    this.sexo = 'F'
  }

  masculino(){
    this.sexo = 'M'
  }
}
