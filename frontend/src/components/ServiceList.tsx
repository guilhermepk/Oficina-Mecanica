'use client'

import { use } from "react";

interface ServiceListProps {
    services: Promise<Array<{
        id: number,
        description: string,
        price: number
    }>>
}

export default function ServiceList({
    services
}: ServiceListProps) {
    const loadedServices = use(services);

    return (
        <div className="flex items-center justify-center flex-wrap gap-[25px]">
            {loadedServices?.length > 0 ? loadedServices.map((service) => (
                <div key={service.id} className="border p-2">
                    <p> {service.description} </p>
                    <p> R$ {service.price.toFixed(2).replace('.', ',')} {typeof service.price} </p>
                </div>
            )) : (
                <p className="opacity-50"><i> Nenhum serviço encontrado </i></p>
            )}
        </div>
    );
}