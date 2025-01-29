import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-navbar',
    imports: [
        NgForOf,
        RouterLink
    ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

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
        { label: 'Ortodonzia', link: '/ortodonzia' },
        { label: 'Igiene', link: '/igene' },  // rotta già configurata
        { label: 'Sbiancamento', link: '/sbiancamento' }
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
