import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-clientes',
  templateUrl: './form-clientes.component.html',
  styleUrls: ['./form-clientes.component.css']
})
export class FormClientesComponent {
  clientForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.clientForm = this.fb.group({
      nomClientes: ['', Validators.required],
      dirrecionClientes: ['', Validators.required],
      estadoClientes: ['', Validators.required]
    });
  }

  onSubmit() {
    console.log(this.clientForm.value);
  }
}
