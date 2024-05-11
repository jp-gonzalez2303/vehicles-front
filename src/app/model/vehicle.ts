export interface Vehicle {
    id: number;
    make: string;
    model: string;
    plate: string;
    color: string;
    year: number;
  }

   
export interface VehicleListResponse {
  content: Vehicle[];
  totalElements: number;
  totalPages: number;
}