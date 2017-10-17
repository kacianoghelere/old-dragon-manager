import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../../../../shared/shared.module';
import { UtilModule } from "../../../../util/util.module";

import { CampaignPagesRoutingModule } from './campaign-pages-routing.module';
import { CampaignPagesComponent } from './campaign-pages/campaign-pages.component';
import { CampaignBlankPageComponent } from './campaign-blank-page/campaign-blank-page.component';
import { CampaignPageCardComponent } from './campaign-page-card/campaign-page-card.component';
import { CampaignPagesHomeComponent } from './campaign-pages-home/campaign-pages-home.component';
import { CampaignPageComponent } from './campaign-page/campaign-page.component';
import { CampaignPageEditorComponent } from './campaign-page-editor/campaign-page-editor.component';
import { CampaignPagesService } from './shared/campaign-pages.service';
import { PageCategoriesService } from "./shared/page-categories.service";

import { CampaignPagesGuard } from "./shared/campaign-pages.guard";
import { CampaignPageGuard } from "./shared/campaign-page.guard";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    UtilModule,
    CampaignPagesRoutingModule
  ],
  declarations: [
    CampaignPagesComponent,
    CampaignBlankPageComponent,
    CampaignPageCardComponent,
    CampaignPagesHomeComponent,
    CampaignPageComponent,
    CampaignPageEditorComponent
  ],
  providers: [
    CampaignPagesService,
    PageCategoriesService,
    CampaignPagesGuard,
    CampaignPageGuard
  ]
})
export class CampaignPagesModule { }
