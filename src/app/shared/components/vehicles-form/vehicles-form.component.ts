import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { VehicleService } from 'src/app/services/vehicle.service';
import { Vehicle } from 'src/app/model/vehicle';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-vehicles-form',
  templateUrl: './vehicles-form.component.html',
  styleUrls: ['./vehicles-form.component.css']
})
export class VehiclesFormComponent {

  @Input() data;

  @Output() outputData = new EventEmitter<Vehicle>();

  formRegister: FormGroup;


  constructor(private vehicleService: VehicleService, private formBuilder: FormBuilder) {
    this.initForm();

  }

  initForm() {
    this.formRegister = this.formBuilder.group({
      color: ['', Validators.required],
      make: ['', Validators.required],
      model: ['', Validators.required],
      plate: ['', Validators.required],
      year: ['', Validators.required],
      id: ['']
    })
  }




  updateVehicle(): void { 
    this.outputData.emit(this.formRegister.value);
  }

  insertVehicle(): void {
    if (this.formRegister.valid) {
      debugger
      if (this.data) {
        this.updateVehicle();
      }
      else {
        this.vehicleService.addVehicle(this.formRegister.value).subscribe(
          response => {
            alert('Vehiculo insertado con exito');
            console.log('Respuesta de la API:', response);
            this.formRegister.reset();
          },
          error => {
            console.error('Error al llamar a la API:', error);
          }
        );
      }
    }
  }





  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data'] && this.data) {
      this.formRegister.get('id').setValue(this.data.id);
      this.formRegister.get('color').setValue(this.data.color);
      this.formRegister.get('make').setValue(this.data.make);
      this.formRegister.get('model').setValue(this.data.model);
      this.formRegister.get('plate').setValue(this.data.plate);
      this.formRegister.get('year').setValue(this.data.year);
    }

  }
}
