import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { IgeneComponent } from './components/igene/igene.component';
import { OdontoiatriaComponent } from './components/odontoiatria/odontoiatria.component';
import { SbiancamentoComponent } from './components/sbiancamento/sbiancamento.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: 'igene', component: IgeneComponent },
      { path: 'odontoiatria', component: OdontoiatriaComponent },
      { path: 'sbiancamento', component: SbiancamentoComponent },
    ],
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirect alla home
  { path: '**', redirectTo: '/home' }, // Redirect per rotte non trovate
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

