'use client'

import { use } from "react";
import ClientCard from "./ClientCard";

interface Client {
    id: number,
    name: string
}

interface ClientListProps {
    clients: Promise<Array<Client>> | Array<Client>
}

export default function ClientList({
    clients
}: ClientListProps) {
    const loadedClients = clients instanceof Promise ? use(clients) : clients;

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