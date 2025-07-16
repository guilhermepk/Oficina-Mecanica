import { backendApi } from "../axios-backend-api";
import { FindAllClientsResponseDto } from "./models/dtos/find-all-clients-response.dto";

export default async function findAllClients(): Promise<FindAllClientsResponseDto> {
    return await backendApi.get<FindAllClientsResponseDto>('clients')
        .then(response => {
            return response.data;
        });
}