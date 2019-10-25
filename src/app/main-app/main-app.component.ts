import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-app',
  templateUrl: './main-app.component.html',
  styleUrls: ['./main-app.component.less']
})
export class MainAppComponent implements OnInit {
  count = 0;
  corrent: string = 'abc';
  onKey(event: any) {
    if (event.target.value === this.corrent) {
      this.corrent = 'fuck';
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
