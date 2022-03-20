import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { AppliedloansComponent } from './appliedloans/appliedloans.component';
import { LoandetailsComponent } from './loandetails/loandetails.component';
import { SharedService } from './shared.service';
import { HttpClientModule } from '@angular/common/http';
import { ReviewComponent } from './review/review.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({

  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    AppliedloansComponent,
    LoandetailsComponent,
    ReviewComponent,
    FeedbackComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
   
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
