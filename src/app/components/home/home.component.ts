import { Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DentalCardComponent} from '../dental-card/dental-card.component';
import {RouterLink} from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';

@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    MatSidenavModule,
    DentalCardComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true
})
export class HomeComponent {



}
