import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { IgeneComponent } from './components/igene/igene.component';
import { OdontoiatriaComponent } from './components/odontoiatria/odontoiatria.component';
import { SbiancamentoComponent } from './components/sbiancamento/sbiancamento.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'ortodonzia', component: OdontoiatriaComponent },
  { path: 'igiene', component: IgeneComponent },
  { path: 'sbiancamento', component: SbiancamentoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

