import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.scss']
})
export class UserSettingsComponent implements OnInit {

  user: any = {name: 'Test', email: 'test@test.com', password: '', confirm: ''};
  meuForm: FormGroup;

  constructor(private builder: FormBuilder) {
    this.meuForm = builder.group({
        titulo: ['', Validators.compose(
            [Validators.required, Validators.minLength(4)]
        )],
        url: ['', Validators.required],
        descricao: ['']
    });
  }

  ngOnInit() {
  }

  saveChanges() {
    console.log(this.user);
  }

}
