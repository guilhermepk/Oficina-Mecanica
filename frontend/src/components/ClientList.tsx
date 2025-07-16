'use client'

import { use } from "react";

interface VehicleListProps {
    clients: Promise<Array<{
        id: number,
        name: string
    }>>
}

export default function ClientList({
    clients
}: VehicleListProps) {
    const loadedClients = use(clients);

    return (
        <div className="flex items-center justify-center flex-wrap gap-[25px]">
            {loadedClients?.length > 0 ? loadedClients.map((service) => (
                <div key={service.id} className="border p-2 rounded-[10px]">
                    <p> {service.name} </p>
                </div>
            )) : (
                <p className="opacity-50"><i> Nenhum client encontrado </i></p>
            )}
        </div>
    );
}