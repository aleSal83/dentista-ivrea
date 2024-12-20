import {AfterViewInit, Component} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [
  ],
  templateUrl: './home.component.html',
  standalone: true,
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {

  constructor() {
  }

  ngAfterViewInit() {
    this.setupMenu();
  }

  setupMenu(): void {
    document.querySelectorAll('.menu').forEach(menu => {
      const link = menu.querySelector('a');
      const dropdown = menu.querySelector('.dropdown');

      if (link && dropdown) {
        link.addEventListener('mouseover', () => {
          dropdown.classList.add('show');
        });

        menu.addEventListener('mouseleave', () => {
          dropdown.classList.remove('show');
        });
      }
    });
  }



}
