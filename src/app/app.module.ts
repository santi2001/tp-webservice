import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { PuntoAComponent } from './component/punto-a/punto-a.component';
import { PuntoBComponent } from './component/punto-b/punto-b.component';
import { PuntoCComponent } from './component/punto-c/punto-c.component';
import { PuntoDComponent } from './component/punto-d/punto-d.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PuntoAComponent,
    PuntoBComponent,
    PuntoCComponent,
    PuntoDComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
