import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  userName: string;
  inputData: string;
  image: string;

  constructor() {
    this.userName = '';
    this.inputData = '';
    this.image = '../../assets/sogen.jpg';
  }

  registerName(): void {
    this.userName = this.inputData;
    this.inputData = '';
  }

  onReturnImage(image: string) {
    this.image = image;
  }
}
