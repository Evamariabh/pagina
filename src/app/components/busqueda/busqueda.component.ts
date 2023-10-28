import { Component } from '@angular/core';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {
 
  constructor() { }
  filterPost = '';
  posts = [
    {
      "id": 1,
      "title": "pastel One",
      "date": "02/04/2019"
    },
    {
      "id": 2,
      "title": "pastel Two",
      "date": "11/04/2019"
    },
    {
      "id": 3,
      "title": "pastel Three",
      "date": "30/01/2019"
    },
    {
      "id": 4,
      "title": "pastel Four",
      "date": "30/05/2019"
    },
    {
      "id": 5,
      "title": "pastel Five",
      "date": "30/04/2019"
    }
  ];
  ngOnInit() {
  }

}