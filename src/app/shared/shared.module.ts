import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MarkdownModule } from 'angular2-markdown';

import { ConfirmationPopoverModule } from 'angular-confirmation-popover';

import { ToasterService } from './toaster.service';
import { CoreComponent } from './components/core/core.component';
import { CampaignCardComponent } from './components/campaign-card/campaign-card.component';
import { CharacterCardComponent } from './components/character-card/character-card.component';
import { MarkdownRendererComponent } from './components/markdown-renderer/markdown-renderer.component';
import { MarkdownInstructionsComponent } from './components/markdown-instructions/markdown-instructions.component';
import { SpecializationCardComponent } from './components/specialization-card/specialization-card.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { UserPillComponent } from './components/user-pill/user-pill.component';

import { HtmlOutletDirective } from './directives/html-outlet.directive';

import { ApiService } from './services/api.service';
import { CustomMarkdownService } from './services/custom-markdown.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MarkdownModule.forRoot(),
    ConfirmationPopoverModule.forRoot({confirmButtonType: 'danger'})
  ],
  providers: [
    ApiService,
    CustomMarkdownService
  ],
  declarations: [
    CampaignCardComponent,
    CharacterCardComponent,
    UserPillComponent,
    CoreComponent,
    MarkdownInstructionsComponent,
    MarkdownRendererComponent,
    UserCardComponent,
    HtmlOutletDirective,
    SpecializationCardComponent
  ],
  exports: [
    MarkdownModule,
    ConfirmationPopoverModule,
    CampaignCardComponent,
    CharacterCardComponent,
    UserPillComponent,
    MarkdownRendererComponent,
    MarkdownInstructionsComponent,
    UserCardComponent,
    HtmlOutletDirective,
    SpecializationCardComponent
  ]
})
export class SharedModule { }
