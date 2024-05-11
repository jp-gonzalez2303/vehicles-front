import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  private apiUrl = 'http://localhost:8080/vehicle';

  constructor(private http: HttpClient) { }
  
  getVehicles(page: number, pageSize: number, orderDirection: string,orderField: string, stringFilter:string): Observable<any> {
    debugger
    let params = new HttpParams()
      .set('page', page -1)
      .set('pageSize', pageSize )
      .set('orderField', orderField.toString())
      .set('orderDirection', orderDirection.toString());
    if(stringFilter){
       
    params=  params.set('filter', stringFilter.toString())
    }


    return this.http.get<any>(this.apiUrl, { params });
  }

  getVehicleById(vehicleId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${vehicleId}`);
  }

  addVehicle(vehicleData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, vehicleData);
  }

  updateVehicle(vehicleId: number, vehicleData: any): Observable<any> {
    debugger
    return this.http.put<any>(`${this.apiUrl}/${vehicleId}`, vehicleData);
  }

  deleteVehicle(vehicleId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${vehicleId}`);
  }

}
