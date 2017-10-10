import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../../../../shared/shared.module';
import { UtilModule } from "../../../../util/util.module";

import { CampaignWikiRoutingModule } from './campaign-wiki-routing.module';
import { CampaignWikiComponent } from './campaign-wiki/campaign-wiki.component';
import { CampaignWikiBlankPageComponent } from './campaign-wiki-blank-page/campaign-wiki-blank-page.component';
import { CampaignWikiCardComponent } from './campaign-wiki-card/campaign-wiki-card.component';
import { CampaignWikiHomeComponent } from './campaign-wiki-home/campaign-wiki-home.component';
import { CampaignWikiPageComponent } from './campaign-wiki-page/campaign-wiki-page.component';
import { CampaignWikiPageEditorComponent } from './campaign-wiki-page-editor/campaign-wiki-page-editor.component';
import { CampaignWikiService } from './shared/campaign-wiki.service';
import { WikiCategoriesService } from "./shared/wiki-categories.service";

import { CampaignWikiGuard } from "./shared/campaign-wiki.guard";
import { CampaignWikiPageGuard } from "./shared/campaign-wiki-page.guard";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    UtilModule,
    CampaignWikiRoutingModule
  ],
  declarations: [
    CampaignWikiComponent,
    CampaignWikiBlankPageComponent,
    CampaignWikiCardComponent,
    CampaignWikiHomeComponent,
    CampaignWikiPageComponent,
    CampaignWikiPageEditorComponent
  ],
  providers: [
    CampaignWikiService,
    WikiCategoriesService,
    CampaignWikiGuard,
    CampaignWikiPageGuard
  ]
})
export class CampaignWikiModule { }
