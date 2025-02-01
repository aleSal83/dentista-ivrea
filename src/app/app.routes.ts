import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { IgeneComponent } from './components/igene/igene.component';
import { OdontoiatriaComponent } from './components/odontoiatria/odontoiatria.component';
import { SbiancamentoComponent } from './components/sbiancamento/sbiancamento.component';
import {StoriaComponent} from './components/storia/storia.component';
import {TeamComponent} from './components/team/team.component';
import {ChiSiamoComponent} from './components/chi-siamo/chi-siamo.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'ortodonzia', component: OdontoiatriaComponent },
  { path: 'igiene', component: IgeneComponent },
  { path: 'sbiancamento', component: SbiancamentoComponent },
  { path: 'storia', component: StoriaComponent },
  { path: 'team', component: TeamComponent },
  { path: 'mission', component: ChiSiamoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

