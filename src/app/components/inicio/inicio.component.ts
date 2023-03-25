import { Component } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router:Router){

  }

  cambiarAltura(event:any){
    this.altura=event.target.value;
  }

  femenino(){
    this.sexo = 'F'
  }

  masculino(){
    this.sexo = 'M'
  }

  calcularBMI(){
    const BMI=this.peso/Math.pow(this.altura/100,2);
    this.router.navigate(['./resultado',BMI])
  }

  sumarEdad(){
    this.edad +=1;
  }

  resEdad(){
    this.edad -=1;
  }

  sumarPeso(){
    this.peso+=1;
  }

  resPeso(){
    this.peso-=1;
  }
}
