import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { ManageAccountsComponent } from './manage-accounts/manage-accounts.component';
import { TransferFundsComponent } from './transfer-funds/transfer-funds.component';
import { DepositFundsComponent } from './deposit-funds/deposit-funds.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OpenAccountComponent } from './open-account/open-account.component';

@NgModule({
  declarations: [
    AppComponent,
    ManageAccountsComponent,
    TransferFundsComponent,
    DepositFundsComponent,
    DashboardComponent,
    OpenAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
