'use client';

import { Suspense } from "react";
import findAllClients from "./apis/backend/clients/find-all-clients";
import ClientList from "@/components/ClientList";

export default function Home() {
  const clients = findAllClients();

  return (
    <div className="flex items-center justify-center flex-col">
      <h1 className="text-center my-[50px]"> Clientes </h1>

      <Suspense fallback={<p>Carregando...</p>}>
        <ClientList clients={clients} />
      </Suspense>
    </div>
  );
}