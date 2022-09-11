import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './pages/characters/characters.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'characters',
  },
  {
    path: 'characters',
    component: CharactersComponent,
  },
  {
    path: '**',
    component: NotfoundComponent,
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
