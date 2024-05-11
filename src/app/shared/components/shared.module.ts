import { NgModule } from "@angular/core";
import { VehiclesFormComponent } from "./vehicles-form/vehicles-form.component";
import { VehiclesListComponent } from "./vehicles-list/vehicles-list.component";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { NgxPaginationModule } from 'ngx-pagination';
import { VehicleService } from "src/app/services/vehicle.service";


@NgModule({
    declarations: [
        VehiclesFormComponent,
        VehiclesListComponent,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        NgxPaginationModule
    ],
    exports: [
        VehiclesFormComponent,
        VehiclesListComponent,
    ],
    providers: [VehicleService],
})
export class SharedModule { }