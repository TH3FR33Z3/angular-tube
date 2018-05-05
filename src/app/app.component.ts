import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  constructor() {

  }
  ngOnInit() {
    this.bar().then(res => {
      console.log(res);
    }, reject => Promise.reject('rejected'));
  }
  bar(url) {
    const a = Promise.resolve(url);
    return a;
  }
}
