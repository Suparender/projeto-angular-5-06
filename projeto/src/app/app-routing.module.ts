import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContatosComponent } from './contatos/contatos.component';
import { SobreComponent } from './sobre/sobre.component';
import { AdmComponent } from './adm/adm.component';
import { DetalhesComponent } from './detalhes/detalhes.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'contatos', component: ContatosComponent},
  {path: 'sobre', component: SobreComponent},
  {path: 'urubudopixxx', component: AdmComponent},
  {path: 'detalhes/:id', component: DetalhesComponent}   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
