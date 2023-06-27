import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Output() returnImage: EventEmitter<string> = new EventEmitter();
  @Input() user: string;
  icon: string;
  imageSelected: string;
  image: string;

  constructor() {
    this.icon = '../../assets/icon-angular.png';
    this.imageSelected = 'Campos no entardecer';
    this.image = '';
    this.user = '';
  }

  changeImage(): void {
    switch(this.imageSelected) {
      case 'Campos no entardecer':
        this.image = '../../assets/sogen.jpg';
        break;
      case 'Floresta Noturna':
        this.image = '../../assets/forest.jpg';
        break;
      case 'Céu Enluarado':
        this.image = '../../assets/heaven.jpg';
        break;
      case 'Mar no amanhecer':
        this.image = '../../assets/beach.jpg';
        break;
      default:
        this.image = '../../assets/beach.jpg';
        break;
    }
      this.returnImage.emit(this.image);
  }
}
