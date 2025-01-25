import {AfterViewInit, Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DentalCardComponent} from '../dental-card/dental-card.component';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    DentalCardComponent,
    RouterLink,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true
})
export class HomeComponent {

  menuItems = [
    {
      label: 'Chi siamo',
      open: false,
      subItems: [
        {label: 'Mission', link: '#about1'},
        {label: 'Team', link: '#about2'},
        {label: 'Storia', link: '#about3'}
      ]
    },
    {
      label: 'Servizi',
      open: false,
      subItems: [
        { label: 'Ortodonzia', link: '/services/ortodonzia' },
        { label: 'Igiene', link: '/home/igene' },  // rotta già configurata
        { label: 'Sbiancamento', link: '/services/sbiancamento' }
      ]
    },
    {
      label: 'Contatti',
      open: false,
      subItems: [
        {label: 'Email', link: '#contact1'},
        {label: 'Telefono', link: '#contact2'},
        {label: 'Orari', link: '#contact3'}
      ]
    }
  ];

  toggleDropdown(item: any) {
    item.open = true;
  }

  closeDropdown(item: any) {
    item.open = false;
  }

}
