import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllMemesComponent } from './all-memes/all-memes.component';
import { MemeFormComponent } from './meme-form/meme-form.component';

const routes: Routes = [
  {path: 'memes', component: AllMemesComponent},
  {path: 'form', component: MemeFormComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    AllMemesComponent,
    MemeFormComponent,
  ],
  imports: [
    [RouterModule.forRoot(routes)],
    BrowserModule,
    AppRoutingModule,    
    HttpClientModule,
    FormsModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
