'use client'

import { use } from "react";
import ClientCard from "./ClientCard";

interface ClientListProps {
    clients: Promise<Array<{
        id: number,
        name: string
    }>>
}

export default function ClientList({
    clients
}: ClientListProps) {
    const loadedClients = use(clients);

    return (
        <div className="flex items-center justify-center flex-wrap gap-[25px]">
            {loadedClients?.length > 0 ? loadedClients.map((client) => (
                <ClientCard key={client.id} client={client} />
            )) : (
                <p className="opacity-50"><i> Nenhum client encontrado </i></p>
            )}
        </div>
    );
}