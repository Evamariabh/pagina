import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

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
