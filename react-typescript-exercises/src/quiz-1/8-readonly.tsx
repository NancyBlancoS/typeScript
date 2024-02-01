import React from 'react'

type Item = {
    id: number;
    name: string;
};

type ReadonlyArrayComponentProps = {
    items: readonly Item[];
};

export default function ReadOnly({items} : ReadonlyArrayComponentProps) {
    return (
        <div>
            <h2>Readonly Array Component</h2>
            <ul>
                {items.map((item) => (
                <li key={item.id}>{item.id}: {item.name}</li>
                ))}
            </ul>
        </div>

    )
}
