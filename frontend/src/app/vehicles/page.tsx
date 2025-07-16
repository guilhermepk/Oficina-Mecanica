'use client';

import { Suspense } from "react";
import findAllVehicles from "../apis/backend/vehicles/find-all-vehicles";
import VehicleList from "@/components/VehicleList";

export default function VehiclesPage() {
    const vehicles = findAllVehicles();

    return (
        <div className="flex items-center justify-center flex-col">
            <h1 className="text-center my-[50px]"> Serviços </h1>

            <Suspense fallback={<p>Carregando...</p>}>
                <VehicleList vehicles={vehicles} />
            </Suspense>
        </div>
    );
}