'use client';

import NavbarItem from "./NavbarItem";
import { NavbarItemType } from "@/common/models/types/navbar-item.type";

export default function Navbar() {
    const navItems: Array<NavbarItemType> = [
        { name: 'Clientes', href: '/' },
        { name: 'Veículos', href: '/vehicles' },
        { name: 'Serviços', href: '/services' },
    ];

    return (
        <nav
            className={`
                fixed top-0 left-0
                w-[150px]
                h-[100vh]
                border-r border-[var(--foreground)]
                bg-[var(--background)]
            `}
        >
            <div
                className={`
                    mt-[50px]
                    flex items-center justify-center gap-4 flex-col
                    w-full
                `}
            >
                {navItems.map((item, index) => (
                    <NavbarItem key={index} item={item} />
                ))}
            </div>
        </nav>
    );
}