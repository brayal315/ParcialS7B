import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-farmacos',
  templateUrl: './form-farmacos.component.html',
  styleUrls: ['./form-farmacos.component.css']
})
export class FormFarmacosComponent {
  farmacosForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.farmacosForm = this.formBuilder.group({
      idFarmacos: ['', Validators.required],
      nomFarmaco: ['', Validators.required],
      cantidadFarmaco: ['', Validators.required],
    });
  }

  onSubmit() {
    // Aquí puedes agregar la lógica para guardar los datos en la base de datos o realizar otra acción.
  }
}
