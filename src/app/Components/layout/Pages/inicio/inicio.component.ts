import { Component } from '@angular/core';
import { ICarouselItem } from '../../../../Reutilizable/Components/carousel/icarousel-item.metadata';
import { CAROUSEL_DATA_ITEMS } from '../../../../data/constants/carousel.const';

@Component({
  selector: 'app-inicio',
  standalone: false,
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss'
})
export class InicioComponent {
  public carouselData: ICarouselItem[] = CAROUSEL_DATA_ITEMS;

}
