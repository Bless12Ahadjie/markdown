'use client';

interface Props {
    onClick: () => void;
}

export default function AddDocumentBtn({ onClick }: Props) {
    return (
        <main>
            <button onClick={onClick} className="flex justify-center text-white items-center gap-3 p-1 h-45 w-[202px] bg-orange-600 rounded-lg cursor-pointer hover:bg-orange-400">
                <span>+ New Document</span>
            </button>
        </main>
    );
}
