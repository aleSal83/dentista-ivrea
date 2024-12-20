import {AfterViewInit, Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import {DentalCardComponent} from '../dental-card/dental-card.component';

@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    DentalCardComponent
  ],
  templateUrl: './home.component.html',
  standalone: true,
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {

  menuItems = [
    {
      label: 'Home',
      open: false,
      subItems: [
        { label: 'Sottolink 1', link: '#home1' },
        { label: 'Sottolink 2', link: '#home2' },
        { label: 'Sottolink 3', link: '#home3' }
      ]
    },
    {
      label: 'Chi siamo',
      open: false,
      subItems: [
        { label: 'Mission', link: '#about1' },
        { label: 'Team', link: '#about2' },
        { label: 'Storia', link: '#about3' }
      ]
    },
    {
      label: 'Servizi',
      open: false,
      subItems: [
        { label: 'Ortodonzia', link: '#service1' },
        { label: 'Igiene', link: '#service2' },
        { label: 'Sbiancamento', link: '#service3' }
      ]
    },
    {
      label: 'Contatti',
      open: false,
      subItems: [
        { label: 'Email', link: '#contact1' },
        { label: 'Telefono', link: '#contact2' },
        { label: 'Orari', link: '#contact3' }
      ]
    }
  ];

  toggleDropdown(item: any) {
    item.open = true;
  }

  closeDropdown(item: any) {
    item.open = false;
  }

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
