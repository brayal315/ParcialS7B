import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-farmacias',
  templateUrl: './form-farmacias.component.html',
  styleUrls: ['./form-farmacias.component.css']
})
export class FormFarmaciasComponent {
  farmaciaForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.farmaciaForm = this.formBuilder.group({
      nomFarmacias: ['', Validators.required],
      calleFarmacias: ['', Validators.required],
      idFarmacias: ['']
    });
  }

  onSubmit(): void {
    console.log(this.farmaciaForm.value);
  }
}
