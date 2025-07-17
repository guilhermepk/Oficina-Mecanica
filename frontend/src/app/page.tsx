'use client';

import { useEffect, useState } from "react";
import findAllClients from "./apis/backend/clients/find-all-clients";
import ClientList from "@/components/ClientList";
import { FindAllClientsResponseDto } from "./apis/backend/clients/models/dtos/find-all-clients-response.dto";

export default function Home() {
  const [clients, setClients] = useState<FindAllClientsResponseDto | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [nameFilter, setNameFilter] = useState<string>('');
  const [timeoutRef, setTimeoutRef] = useState<NodeJS.Timeout | null>(null);

  async function getClient() {
    const response = await findAllClients(nameFilter);
    setClients(response);
    setLoading(false);
  }

  useEffect(() => {
    if (timeoutRef) {
      clearTimeout(timeoutRef);
      setTimeoutRef(null);
    }

    const timeout = setTimeout(() => {
      setLoading(true);
      getClient();
    }, 500);

    return () => clearTimeout(timeout);
  }, [nameFilter]);

  if (!clients) return <p className="opacity-50"><i> Nenhum cliente encontrado </i></p>

  return (
    <div className="flex items-center justify-center flex-col">
      <h1 className="text-center my-[50px]"> Clientes </h1>

      <input
        className="border rounded-[10px] mb-[25px] px-2 py-1"
        type="text"
        value={nameFilter}
        onChange={(e) => setNameFilter(e.target.value)}
      />

      {loading ? (
        <p className="text-center mt-[100px]"> Carregando informações... </p>
      ) : (
        <ClientList clients={clients} />
      )}

    </div>
  );
}