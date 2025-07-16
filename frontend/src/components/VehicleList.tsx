'use client'

import { use } from "react";

interface VehicleListProps {
    vehicles: Promise<Array<{
        id: number,
        plate: string,
        model: string
    }>>
}

export default function VehicleList({
    vehicles
}: VehicleListProps) {
    const loadedVehicles = use(vehicles);

    return (
        <div className="flex items-center justify-center flex-wrap gap-[25px]">
            {loadedVehicles?.length > 0 ? loadedVehicles.map((vehicle) => (
                <div key={vehicle.id} className="border p-2 rounded-[10px]">
                    <p> Modelo: {vehicle.model} </p>
                    <p> Placa: {vehicle.plate} </p>
                </div>
            )) : (
                <p className="opacity-50"><i> Nenhum veículo encontrado </i></p>
            )}
        </div>
    );
}