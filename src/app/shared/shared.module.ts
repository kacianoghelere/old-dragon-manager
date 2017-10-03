import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MarkdownModule } from 'angular2-markdown';

import { ApiService } from './api.service';
import { ToasterService } from './toaster.service';
import { CoreComponent } from './components/core/core.component';
import { CampaignCardComponent } from './components/campaign-card/campaign-card.component';
import { CharacterCardComponent } from './components/character-card/character-card.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { MarkdownRendererComponent } from './components/markdown-renderer/markdown-renderer.component';
import { WikiLinkDirective } from './directives/wiki-link.directive';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MarkdownModule.forRoot()
  ],
  providers: [
    ApiService
  ],
  declarations: [
    CampaignCardComponent,
    CharacterCardComponent,
    CoreComponent,
    MarkdownRendererComponent,
    UserCardComponent,
    WikiLinkDirective
  ],
  exports: [
    CampaignCardComponent,
    CharacterCardComponent,
    MarkdownRendererComponent,
    UserCardComponent
  ]
})
export class SharedModule { }
