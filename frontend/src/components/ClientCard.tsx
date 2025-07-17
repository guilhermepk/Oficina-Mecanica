import { useRouter } from "next/navigation";


interface ClientCardProps {
    client: {
        id: number,
        name: string
    }
}

export default function ClientCard({
    client
}: ClientCardProps) {
    const router = useRouter();

    function handleClick() {
        router.push(`/clients/${client.id}`);
    }

    return (
        <div
            className={`
                border rounded-[10px]
                p-2
                cursor-pointer hover:bg-[var(--foreground)] hover:text-[var(--background)] hover:font-extrabold
            `}
            onClick={handleClick}
        >
            <p> {client.name} </p>
        </div>
    );
}