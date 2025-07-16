import { backendApi } from "../axios-backend-api";
import { FindAllServicesResponseDto } from "./models/dtos/find-all-services-response.dto";

export default async function findAllServices(): Promise<FindAllServicesResponseDto> {
    return await backendApi.get<FindAllServicesResponseDto>('services')
        .then(response => {
            return response.data;
        });
}