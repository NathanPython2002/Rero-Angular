import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [BrowserModule, AppComponent, RouterModule.forRoot(routes)],
  bootstrap: [AppComponent],
})
export class AppModule {}
