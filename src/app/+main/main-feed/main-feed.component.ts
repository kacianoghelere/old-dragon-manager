import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-feed',
  templateUrl: './main-feed.component.html',
  styleUrls: ['./main-feed.component.scss']
})
export class MainFeedComponent implements OnInit {

  feedList: any[];

  constructor() { }

  ngOnInit() {
    this.feedList = [
      {
        author: {
          id: 1,
          name: 'Administrador',
          picture: 'https://fakeimg.pl/64x64/'
        },
        description: 'O Administrador fez uma alteração marota',
        timestamp: new Date()
      },
      {
        author: {
          id: 1,
          name: 'Administrador',
          picture: 'https://fakeimg.pl/64x64/'
        },
        description: 'O Administrador fez outra alteração marota',
        timestamp: new Date()
      },
      {
        author: {
          id: 1,
          name: 'Administrador',
          picture: 'https://fakeimg.pl/64x64/'
        },
        description: 'O Administrador fez mais uma alteração marota',
        timestamp: new Date()
      }
    ];
  }

}
