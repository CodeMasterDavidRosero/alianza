import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsComponent } from './clients/clients.component';
import { NewClientComponent } from './clients/new-client/new-client.component';

const routes: Routes = [
{
  path:'',
  component:ClientsComponent
},

{path:'clients', component:ClientsComponent},
{path:'new-Clients', component:NewClientComponent},
{path:'', redirectTo:'clients', pathMatch:'full'},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
