import 'rxjs/add/operator/map';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ToastrModule } from 'ngx-toastr';

import { MarkdownModule } from 'angular2-markdown';

import { ConfirmationPopoverModule } from 'angular-confirmation-popover';

import { AppRoutingModule } from './app-routing.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { LayoutModule } from './layout/layout.module';
import { RolesModule } from './roles/roles.module';
import { SharedModule } from './shared/shared.module';
import { UsersModule } from './users/users.module';
import { UtilModule } from './util/util.module';
import { CampaignInvitationService } from "./shared/services/campaign-invitation.service";
import { TrailService }  from "./shared/services/trail.service";
import { ValidatorsService } from './shared/services/validators.service';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
      closeButton: true
    }),
    MarkdownModule.forRoot(),
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger'
    }),
    AuthenticationModule,
    SharedModule,
    UtilModule,
    LayoutModule,
    RolesModule,
    UsersModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    CampaignInvitationService,
    ValidatorsService,
    TrailService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
