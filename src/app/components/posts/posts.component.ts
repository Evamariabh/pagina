import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit{

  constructor() { }
  filterPost = '';
  posts = [
    {
      "id": 1,
      "title": "Pastel Chocolate",
      "date": "02/04/2019"
    }, 
    {
      "id": 2,
      "title": "Tartas",
      "date": "11/04/2019"
    },
    {
      "id": 3,
      "title": "Brownies",
      "date": "30/01/2019"
    },
    {
      "id": 4,
      "title": "Pastel Zanahoria",
      "date": "30/05/2019"
    },
    {
      "id": 5,
      "title": "Tarta Queso",
      "date": "30/04/2019"
    },
    {
      "id": 6,
      "title": "Pai de limon",
      "date": "30/04/2019"
    },
    {
      "id": 7,
      "title": "Pai de Mango",
      "date": "30/04/2019"
    },
    {
      "id": 8,
      "title": "Chesscake",
      "date": "30/04/2019"
    }
  ];
  ngOnInit() {
  }
}
