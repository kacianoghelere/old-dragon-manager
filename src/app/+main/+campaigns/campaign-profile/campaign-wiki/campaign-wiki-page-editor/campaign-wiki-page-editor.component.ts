import { Subscription } from 'rxjs/Subscription';

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

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
  wikiPageForm: FormGroup;
  subscription: Subscription;
  campaign_id: number;
  wiki_name: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthenticationService,
    private campaignsService: CampaignsService,
    private campaignWikiService: CampaignWikiService
  ) { }

  /**
   * [getErrorClass description]
   * @param  {string} field [description]
   * @return {any}          [description]
   */
  getErrorClass(field: string): any {
    let control: AbstractControl = this.wikiPageForm.controls[field];
    return {'is-invalid': this.hasError(control)};
  }

  /**
   * Executa rota de navegação adequada
   */
  goBack() {
    if (this.campaignWikiPage && this.campaignWikiPage.id) {
      this.router.navigate([
        '/main/campaigns', this.campaign_id, 'wiki', this.wiki_name
      ]);
    } else {
      this.router.navigate(['/main/campaigns', this.campaign_id, 'wiki']);
    }
  }

  /**
   * [hasError description]
   * @param  {AbstractControl} field [description]
   * @return {boolean}               [description]
   */
  hasError(field: AbstractControl): boolean {
    return (field.touched && !field.pristine && !field.valid);
  }

  ngOnDestroy() {
    if (this.subscription) this.subscription.unsubscribe();
  }

  ngOnInit() {
    this.route.parent.parent.params.subscribe((params) => {
      this.campaign_id = params['campaign_id'];
      this.route.params.subscribe((childParams) => {
        console.log('route.params', childParams);
        this.wiki_name = childParams['page_id'];

        if (this.wiki_name) {
          this.subscription = this.campaignWikiService
            .findChild(this.campaign_id, this.wiki_name)
            .subscribe((response) => {
              this.campaignWikiPage = response;
              this.toFormGroup(this.campaignWikiPage);
            });
        } else {
          this.campaignWikiPage = {
            id: null,
            title: '',
            body: '',
            picture: ''
          };
          this.toFormGroup(this.campaignWikiPage);
        }
      });
    });
  }

  onSubmit({value, valid}: {value: CampaignWikiPage, valid: boolean}) {
    // console.log("Submetido!", value);
    let params: any = {
      id: value.id,
      title: value.title,
      body: value.body,
      picture: value.picture,
      campaign_id: this.campaign_id
    };
    this.campaignWikiService.handle(params).subscribe(
      (response: CampaignWikiPage) => {
        // console.log("Salvou!", response);
        if (!this.campaignWikiPage.id) {
          this.campaignWikiPage.id = response.id;
        }
        if (!this.wiki_name) {
          this.wiki_name = response.wiki_name;
        }
        this.goBack();
      },
      (error) => {
        // console.log("Deu PT!", error);
      }
    );
  }

  /**
   * Dispara destruição de página wiki
   */
  destroyPage(): void {
    console.log('destroyPage', this.campaign_id, this.wiki_name);
    this.campaignWikiService
      .destroyChild(this.campaign_id, this.wiki_name).subscribe((response) => {
          console.log("Deletou!", response);
          this.campaignWikiPage = null;
          this.goBack();
        },
        (error) => {
          console.log("Deu PT!", error);
        }
      );
  }

  /**
   * Cria novo FormGroup para a página da campanha
   * @param  {CampaignWikiPage}  campaignWikiPage Entidade de página da campanha
   * @return {FormGroup}                          The new FormGroup
   */
  toFormGroup(campaignWikiPage: CampaignWikiPage): void {
    this.wikiPageForm = this.formBuilder.group({
      id : this.campaignWikiPage.id,
      title: [
        this.campaignWikiPage.title, [
          Validators.required, Validators.maxLength(45), Validators.minLength(6)
        ]
      ],
      body: [this.campaignWikiPage.body, Validators.required],
      picture: [this.campaignWikiPage.picture]
    });
  }
}
