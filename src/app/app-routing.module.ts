import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonsListComponent } from './components/persons-list/persons-list.component';
import { PersonsDetailsComponent } from './components/persons-details/persons-details.component';
import { AddPersonsComponent } from './components/add-persons/add-persons.component';
const routes: Routes = [
  { path: '', redirectTo: 'persons', pathMatch: 'full' },
  { path: 'persons', component: PersonsListComponent },
  { path: 'persons/:id', component: PersonsDetailsComponent },
  { path: 'add', component: AddPersonsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
