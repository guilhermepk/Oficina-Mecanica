import { backendApi } from "../axios-backend-api";
import { FindAllVehiclesResponseDto } from "./models/dtos/find-all-vehicles-response.dto";

export default async function findAllVehicles(): Promise<FindAllVehiclesResponseDto> {
    return await backendApi.get<FindAllVehiclesResponseDto>('vehicles')
        .then(response => {
            return response.data;
        });
}