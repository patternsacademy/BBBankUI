import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DepositFundsComponent } from './deposit-funds/deposit-funds.component';
import { ManageAccountsComponent } from './manage-accounts/manage-accounts.component';
import { OpenAccountComponent } from './open-account/open-account.component';
import { TransferFundsComponent } from './transfer-funds/transfer-funds.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'manage-accounts', component: ManageAccountsComponent },
  { path: 'open-account', component: OpenAccountComponent },
  { path: 'transfer-funds', component: TransferFundsComponent },
  { path: 'deposit-funds', component: DepositFundsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
