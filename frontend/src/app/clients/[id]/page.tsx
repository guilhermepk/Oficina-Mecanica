'use client'

import findClientById from "@/app/apis/backend/clients/find-client-by-id";
import { FindClientByIdResponseDto } from "@/app/apis/backend/clients/models/dtos/find-client-by-id-response";
import VehicleList from "@/components/VehicleList";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function ClientPage() {
    const { id } = useParams();
    const numberId = Number(id);

    const [loading, setLoading] = useState<boolean>(true);
    const [client, setClient] = useState<FindClientByIdResponseDto | null>(null);

    useEffect(() => {
        if (!Number.isNaN(numberId)) {
            async function getClient() {
                const response = await findClientById(numberId);
                setClient(response);
                setLoading(false);
            }

            getClient();
        } else {
            setLoading(false);
        }
    }, [numberId]);

    if (loading) return <p className="text-center mt-[100px]"> Carregando informações... </p>
    if (!client) return <p className="text-center mt-[100px] text-[red]"> Cliente não encontrado ou ID inválido </p>

    return (
        <div className="flex items-center justify-center flex-col">
            <h1 className="text-center my-[50px]"> {client.name} </h1>

            <h2 className="text-center mb-[25px]"> Veículos do cliente </h2>

            {client.vehicles?.length > 0 ? (
                <div className="flex justify-center flex-wrap gap-8 items-stretch">
                    {client.vehicles.map(vehicle => (
                        <div key={vehicle.id} className="border rounded-[10px] p-4">
                            <p className="text-center"> Placa: {vehicle.plate} </p>

                            <p className="text-center"> Modelo: {vehicle.model} </p>

                            <h3 className="text-center mt-[32px] mb-[25px]"> Serviços deste carro </h3>

                            {vehicle.services?.length > 0 ? (
                                <div className="flex items-stretch justify-center flex-wrap gap-[25px]">
                                    {vehicle.services.map(service => (
                                        <div className="border rounded-[10px] p-3">
                                            <p className="text-center"> {service.description} </p>
                                            <p className="text-center"> R$ {service.price.toFixed(2).replace('.', ',')} </p>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <p className="opacity-50"><i> Nenhum serviço encontrado </i></p>
                            )}
                        </div>
                    ))}
                </div>
            ) : (
                <p className="opacity-50"><i> Nenhum veículo encontrado </i></p>
            )}
        </div>
    );
}