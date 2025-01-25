import { Component } from '@angular/core';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-dental-card',
  imports: [
    NgForOf
  ],
  templateUrl: './dental-card.component.html',
  styleUrl: './dental-card.component.css'
})
export class DentalCardComponent {

  cards = [
    {
      image: 'assets/image/igene_orale.jpg',
      title: 'Igiene Dentale',
      description: 'Controlliamo periodicamente i tuoi denti per mantenerli belli e sani più a lungo.',
    },
    {
      image: 'assets/image/impianti-dentali-1.jpg',
      title: 'Impianti Dentali',
      description: 'Controlliamo periodicamente i tuoi denti per mantenerli belli e sani più a lungo.',
    },
    {
      image: 'assets/image/impianti-dentali-1.jpg',
      title: 'Igiene Dentale',
      description: 'Controlliamo periodicamente i tuoi denti per mantenerli belli e sani più a lungo.',
    },
    {
      image: 'assets/image/impianti-dentali-1.jpg',
      title: 'Implantologia',
      description: 'La soluzione migliore per intervenire contro la perdita dei denti.',
    },
  ];

}
