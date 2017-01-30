import 'rxjs/add/operator/map';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ValidatorsService } from './shared/services/validators.service';
import { AuthenticationModule } from './authentication/authentication.module';
import { LayoutModule } from './layout/layout.module';
import { UtilModule } from './util/util.module';
import { RolesModule } from './roles/roles.module';
import { UsersModule } from './users/users.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AuthenticationModule,
    LayoutModule,
    RolesModule,
    UsersModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [ValidatorsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
