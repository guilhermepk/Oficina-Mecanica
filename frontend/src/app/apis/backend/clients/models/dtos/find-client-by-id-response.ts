export type FindClientByIdResponseDto = {
    id: number,
    name: string,
    vehicles: Array<{
        id: number,
        plate: string,
        model: string,
        services: Array<{
            id: number,
            description: string,
            price: number
        }>
    }>
}