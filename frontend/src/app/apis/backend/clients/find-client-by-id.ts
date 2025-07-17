import { backendApi } from "../axios-backend-api";
import { FindClientByIdResponseDto } from "./models/dtos/find-client-by-id-response";

export default async function findClientById(id: number): Promise<FindClientByIdResponseDto> {
    return await backendApi.get<FindClientByIdResponseDto>(`/clients/${id}`)
        .then(response => response.data);
}