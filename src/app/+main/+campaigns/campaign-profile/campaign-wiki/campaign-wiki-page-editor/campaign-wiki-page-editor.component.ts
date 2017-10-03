import { Subscription } from 'rxjs/Subscription';

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthenticationService } from '../../../../../authentication/authentication.service';
import { Campaign } from '../../../../../shared/entities/campaign';
import { CampaignWikiPage } from '../../../../../shared/entities/campaign-wiki-page';
import { CampaignsService } from '../../../shared/campaigns.service';
import { CampaignWikiService } from '../../../shared/campaign-wiki.service';

@Component({
  selector: 'campaign-wiki-page-editor',
  templateUrl: './campaign-wiki-page-editor.component.html',
  styleUrls: ['./campaign-wiki-page-editor.component.scss']
})
export class CampaignWikiPageEditorComponent implements OnInit {

  campaignWikiPage: CampaignWikiPage;
  campaignWikiPageForm: FormGroup;
  subscription: Subscription;
  campaign_id: number;
  page_id: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthenticationService,
    private campaignsService: CampaignsService,
    private campaignWikiService: CampaignWikiService
  ) { }

  /**
   * Executa rota de navegação adequada
   */
  goBack() {
    if (this.campaignWikiPage.id) {
      this.router.navigate(['/main/campaigns', this.campaign_id, 'wiki', this.page_id]);
    } else {
      this.router.navigate(['/main/campaigns', this.campaign_id, 'wiki']);
    }
  }

  ngOnDestroy() {
    if (this.subscription) this.subscription.unsubscribe();
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.campaign_id = params['campaign_id'];
      this.page_id = params['page_id'];

      if (this.page_id) {
        this.subscription = this.campaignWikiService.find(this.page_id)
          .subscribe((response) => {
            this.campaignWikiPage = response;
            this.toFormGroup(this.campaignWikiPage);
          });
      } else {
        this.campaignWikiPage = {
          id: null,
          title: '',
          body: ''
        };
        this.toFormGroup(this.campaignWikiPage);
      }
    });
  }

  onSubmit({value, valid}: {value: Campaign, valid: boolean}) {
    console.log("Submetido!", value);
    let params = {
      id: value.id,
      title: value.title,
      picture: value.picture,
      description: value.description,
      journals_attributes: value.journals,
      notes_attributes: value.notes,
      characters: value.characters
    };
    this.campaignsService.handle(params).subscribe(
      (response: Campaign) => {
        console.log("Salvou!", response);
        if (!this.campaignWikiPage.id) {
          this.campaignWikiPage.id = response.id;
        }
        this.goBack();
      },
      (error) => console.log("Deu PT!", error)
    );
  }
  /**
   * Cria novo FormGroup para a página da campanha
   * @param  {CampaignWikiPage}  campaignWikiPage Entidade de página da campanha
   * @return {FormGroup}                          The new FormGroup
   */
  toFormGroup(campaignWikiPage: CampaignWikiPage) {
    this.campaignWikiPageForm = this.formBuilder.group({
      id : this.campaignWikiPage.id,
      title: [
        this.campaignWikiPage.title, [
          Validators.required, Validators.maxLength(45), Validators.minLength(6)
        ]
      ],
      body: [this.campaignWikiPage.body, Validators.required]
    });
  }
}
