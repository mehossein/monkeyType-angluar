import { Component, OnInit } from '@angular/core';

import { delay, fromEvent, pluck } from 'rxjs';
@Component({
  selector: 'MK-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {
    fromEvent(document, 'keypress')
      .pipe(pluck('key'))
      .subscribe((res) => {
        this.keys.forEach(
          (item: { id: number; key: string; clicked: boolean }) => {
            if (item.key == res) item.clicked = true;
          }
        );
      });
    fromEvent(document, 'keyup')
      .pipe(delay(100), pluck('key'))
      .subscribe((res) => {
        this.keys.forEach(
          (item: { id: number; key: string; clicked: boolean }) => {
            if (item.key == res) item.clicked = false;
          }
        );
      });
  }

  keys: { id: number; key: string; clicked: boolean }[] = [
    {
      id: 0,
      key: 'q',
      clicked: false,
    },
    {
      id: 1,
      key: 'w',
      clicked: false,
    },
    {
      id: 2,
      key: 'e',
      clicked: false,
    },
    {
      id: 3,
      key: 'r',
      clicked: false,
    },
    {
      id: 4,
      key: 't',
      clicked: false,
    },
    {
      id: 5,
      key: 'y',
      clicked: false,
    },
    {
      id: 6,
      key: 'u',
      clicked: false,
    },
    {
      id: 7,
      key: 'i',
      clicked: false,
    },
    {
      id: 8,
      key: 'o',
      clicked: false,
    },
    {
      id: 9,
      key: 'p',
      clicked: false,
    },
    {
      id: 10,
      key: 'a',
      clicked: false,
    },
    {
      id: 11,
      key: 's',
      clicked: false,
    },
    {
      id: 12,
      key: 'd',
      clicked: false,
    },
    {
      id: 13,
      key: 'f',
      clicked: false,
    },
    {
      id: 14,
      key: 'g',
      clicked: false,
    },
    {
      id: 15,
      key: 'h',
      clicked: false,
    },
    {
      id: 16,
      key: 'j',
      clicked: false,
    },
    {
      id: 17,
      key: 'k',
      clicked: false,
    },
    {
      id: 18,
      key: 'l',
      clicked: false,
    },
    {
      id: 19,
      key: 'z',
      clicked: false,
    },
    {
      id: 20,
      key: 'x',
      clicked: false,
    },
    {
      id: 21,
      key: 'c',
      clicked: false,
    },
    {
      id: 22,
      key: 'v',
      clicked: false,
    },
    {
      id: 23,
      key: 'b',
      clicked: false,
    },
    {
      id: 24,
      key: 'n',
      clicked: false,
    },
    {
      id: 25,
      key: 'm',
      clicked: false,
    },
  ];
}
