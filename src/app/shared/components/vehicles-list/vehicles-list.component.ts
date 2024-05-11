import { Component , ElementRef, ViewChild} from '@angular/core';
import { Vehicle, VehicleListResponse } from 'src/app/model/vehicle';
import { VehicleService } from 'src/app/services/vehicle.service';
 


@Component({
  selector: 'app-vehicles-list',
  templateUrl: './vehicles-list.component.html',
  styleUrls: ['./vehicles-list.component.css']
})
export class VehiclesListComponent {

  dataUpdate;

  vehicles: Vehicle[] = [];
  currentPage = 1;
  pageSize = 5;
  orderField = 'plate';
  orderDirection = 'asc';
  totalItems = 0;
  totalPages = 0;
 
  showUpdate = false;
  
  stringFilter:string = null;
  @ViewChild('myInput') myInput!: ElementRef;

  constructor(private vehicleService: VehicleService) { }

  ngOnInit(): void {
    this.loadVehicles();
  }


  updateVehicle(event): void {
    this.showUpdate = true;
    this.dataUpdate = event;
  }

  consumeUpdateService(event) {
    debugger
    this.dataUpdate = undefined;
    this.vehicleService.updateVehicle(event.id, event).subscribe(
      (data: VehicleListResponse) => {

        alert('Vehiculo actualizado con exito');
        this.loadVehicles();
        this.showUpdate = false;
      },
      (error) => {
        console.error('Error fetching vehicles:', error);
      }
    );
  }

  loadVehicles(): void {
    this.vehicleService.getVehicles(this.currentPage, this.pageSize, this.orderDirection, this.orderField,this.stringFilter).subscribe(
      (data: VehicleListResponse) => {

        this.totalItems = data.totalElements;
        this.totalPages = data.totalPages;
        this.vehicles = data.content;

        this.showUpdate = false;
      },
      (error) => {
        console.error('Error fetching vehicles:', error);
      }
    );

  }

  
  deleteVehicle(vehicleId: number) {

    console.log('inicio eliminacion');
    this.vehicleService.deleteVehicle(vehicleId).subscribe(
      (data: any) => {
        alert('Vehiculo eliminado con exito');
        console.log('Received data:', data);
        this.loadVehicles();

        this.showUpdate = false;

      },
      (error) => {
        console.error('Error deleting vehicle:', error);
      }
    );
  }

  handlePageChange(event: number) {
    debugger 
    console.log('Page changed to:', event);
    this.currentPage = event ;
    this.loadVehicles();
  }

 

  onKeyDown() {
    debugger 
    this.stringFilter= this.myInput.nativeElement.value;
    console.log(this.stringFilter); 
    this.loadVehicles()
  }
}
