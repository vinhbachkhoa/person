import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { PersonComponent } from './person/person.component';
import { DetailPersonComponent } from './detail-person/detail-person.component';

// khi su dung den http va form la phai them hai cai nay vao
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'; 

import { MyserviceService } from './myservice.service';
import { routing } from './route';

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    DetailPersonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
