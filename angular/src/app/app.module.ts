import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SubmitComponent } from './submit/submit.component';
import { TableComponent } from './table/table.component';
import { UpdateComponent } from './update/update.component';
import { MainComponent } from './main/main.component';


const appRoutes: Routes=[
{path: 'list', component: TableComponent},
{path:'create', component: SubmitComponent},
{path:'edit', component: UpdateComponent},
{path:'', component:MainComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    SubmitComponent,
    TableComponent,
    UpdateComponent,
    MainComponent
   
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
