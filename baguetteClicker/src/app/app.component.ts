import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string;
  copyrightYear: number;
  copyrightName: string;

  constructor() {
    this.title = 'Boulangerie de DidYeah';
    this.copyrightYear = new Date().getFullYear();
    this.copyrightName = 'Didier PHILIBERT';
  }
}
