import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  
  
  eventoClick(){
    alert('Diste Un Clik!')
  }

  eventoDoble(){
    alert('Diste Doble click!')
  }

  eventoMousemove(){
    alert('Estas moviendo el mouse dentro de este elemento!')
  }

  eventoMouseOut(){
    alert('Estas fuera del elemento!')
  }

  eventoMouseDown(){
    alert('Pulsaste un boton del mouse!')
  }

  eventoContextMenu(){
    alert('Pulsaste el boton Derecho!')
  }
}
