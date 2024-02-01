import React from 'react'

interface ListProps<T>{
    items: T[]
}

function List<T>({items}: ListProps<T>) {
    return (
        <div>
            <h2>Generic List</h2>
            {/* <ul>
                {items.map((item, index) => (
                    <li key={index}> {item} </li>
                    ))}
            </ul> */}
        </div>
    )
}

export default List;