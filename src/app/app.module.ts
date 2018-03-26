import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms'; 
import { HttpModule } from '@angular/http';

import { MatToolbarModule, MatSpinner } from '@angular/material';
import { MatListModule } from '@angular/material';
import { MatGridListModule } from '@angular/material';
import { MatCardModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { MatDialogModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatCheckboxModule } from '@angular/material';
import { MatSlideToggleModule } from '@angular/material';
import { MatOptionModule } from '@angular/material';
import { MatSelectModule } from '@angular/material';
import { MatProgressSpinnerModule } from '@angular/material';
import { MatSliderModule } from '@angular/material';

import 'hammerjs'

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { DishdetailComponent } from './dishdetail/dishdetail.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';

import { DishService } from './services/dish.service';
import { PromotionService } from './services/promotion.service';
import { LeaderService } from './services/leader.service';
import { ProcessHttpMsgService }  from './services/process-httpmsg.service';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { baseURL } from './shared/baseurl';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DishdetailComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    FlexLayoutModule,
    MatDialogModule,
    MatInputModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatOptionModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatSliderModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    AppRoutingModule
  ], 
  entryComponents: [
    LoginComponent
  ],  
  providers: [DishService, 
              PromotionService, 
              LeaderService, 
              {provide: 'BaseURL', useValue: baseURL},
              ProcessHttpMsgService],
  bootstrap: [AppComponent]
})
export class AppModule { }
