interface ClientCardProps {
    client: {
        id: number,
        name: string
    }
}

export default function ClientCard({
    client
}: ClientCardProps) {
    return (
        <div className={`
            border rounded-[10px]
            p-2
            cursor-pointer hover:bg-[var(--foreground)] hover:text-[var(--background)] hover:font-extrabold
        `}>
            <p> {client.name} </p>
        </div>
    );
}