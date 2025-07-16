'use client';

import { Suspense } from "react";
import findAllServices from "../apis/backend/services/find-all-services";
import ServiceList from "@/components/ServiceList";

export default function ServicePage() {
    const services = findAllServices();

    return (
        <div className="flex items-center justify-center flex-col">
            <h1 className="text-center my-[50px]"> Serviços </h1>

            <Suspense fallback={<p>Carregando...</p>}>
                <ServiceList services={services} />
            </Suspense>
        </div>
    );
}