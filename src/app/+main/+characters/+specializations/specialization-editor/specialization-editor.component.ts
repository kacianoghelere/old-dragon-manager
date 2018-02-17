import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';

import { Alignment, CharacterClass, CharacterSpecialization } from '../../../../shared/models';
import { AlignmentsService } from '../../shared/alignments.service';
import { AuthenticationService } from '../../../../authentication/authentication.service';
import { ClassesService } from '../../shared/classes.service';
import { CoreComponent } from '../../../../shared/components/core/core.component';
import { SpecializationsService } from '../../shared/specializations.service';

@Component({
  selector: 'specialization-editor',
  templateUrl: './specialization-editor.component.html',
  styleUrls: ['./specialization-editor.component.scss']
})
export class SpecializationEditorComponent extends CoreComponent
    implements OnInit, OnDestroy {

  alignments: Alignment[];
  characterClasses: CharacterClass[];
  specialization: CharacterSpecialization;
  specializationForm: FormGroup;
  subscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private alignmentsService: AlignmentsService,
    private authService: AuthenticationService,
    private classesService: ClassesService,
    private specializationsService: SpecializationsService,
    private toastrService: ToastrService
  ) {
    super();
  }

  ngOnDestroy() {
    if (this.subscription) this.subscription.unsubscribe();
  }

  ngOnInit() {
    this.alignmentsService.list().subscribe((alignments) => {
      this.alignments = alignments;
      this.classesService.list().subscribe((characterClasses) => {
        this.characterClasses = characterClasses;
        this.route.params.subscribe((params) => {
          let id = params['id'];
          if (id) {
            this.subscription = this.specializationsService.find(id)
            .subscribe((response: CharacterSpecialization) => {
              this.specialization = response;
              this.toFormGroup(this.specialization);
            });
          } else {
            this.specialization = {
              id: null,
              name: '',
              description: '',
              picture: '',
              min_level: 1,
              stages: []
            };
            this.toFormGroup(this.specialization);
          }
        });
      });
    });
  }

  /**
   * Executa rota de navegação adequada
   */
  goBack() {
    if (this.specialization.id) {
      this.router.navigate(
        ['/main/characters/specializations', this.specialization.flat_name]
      );
    } else {
      this.router.navigate(['/main/characters/specializations']);
    }
  }

  onSubmit({value, valid}: {value: any, valid: boolean}) {
    console.log("Submetido!", value);
    let params = {
      id: value.id,
      name: value.name,
      picture: value.picture,
      description: value.description,
      min_level: value.min_level,
      alignment_id: value.alignment,
      character_class_id: value.characterClass,
      stages_attributes: value.stages.map((stage) => ({
        id: stage.id,
        description: stage.description,
        unlock_level: +stage.unlock_level,
        _destroy: stage._destroy
      }))
    };
    console.log("Gravando!", params);

    this.specializationsService.handle(params).subscribe(
      (response: CharacterSpecialization) => {
        if (!this.specialization.id) {
          this.specialization.id = response.id;
        }
        this.specialization.flat_name = response.flat_name;
        this.toastrService.success('Operação concluída',
          'Os dados da campanha foram gravados com sucesso.');
        this.goBack();
      },
      (error) => {
        this.toastrService.warning('Ooops! Ocorreu um erro.',
          'Parace que algum kobold andou mexendo nos cabos de rede.');
      }
    );
  }

  getActive(id: any, field: string): {active: boolean} {
    return {active: this.compareFormValues(id, field)};
  }

  compareFormValues(id: any, field: string): boolean {
    return id === this.specializationForm.value[field];
  }

  /**
   * Cria novo FormGroup para a campanha
   * @param {CharacterSpecialization} specialization Entidade da especialização
   */
  toFormGroup(specialization: CharacterSpecialization) {
    let characterClass = specialization['character_class'] || {};
    let class_id = characterClass ? characterClass['flat_name'] : null;

    let alignment = specialization['alignment'] || {};
    let alignment_id = alignment ? alignment['id'] : null;

    console.log('Class ID', class_id);
    this.specializationForm = this.formBuilder.group({
      id: this.specialization.id,
      name: [
        this.specialization.name, [
          Validators.required,
          Validators.maxLength(45),
          Validators.minLength(4)
        ]
      ],
      picture: [this.specialization.picture, Validators.maxLength(300)],
      description: [this.specialization.description, Validators.required],
      min_level: [
        this.specialization.min_level, [
          Validators.required,
          Validators.max(20),
          Validators.min(1)
        ]
      ],
      alignment: [alignment_id || '', [ Validators.required ]],
      characterClass: [class_id || '', [ Validators.required ]]
    });
  }

}
