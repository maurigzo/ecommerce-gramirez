import React from 'react';
import './ItemList.css'
import Item from '../../components/Item/Item';

function ItemList({ items }) {
    return <div className="container">
        <ul className="list-group">
            {items.map(i => <Item
                key={i.id}
                itemId={i.id}
                title={i.title}
                description={i.description}
                price={i.price}
                image={i.image}
                initial={i.initial}
                min={i.min}
                max={i.max}>
            </Item>)}
        </ul>
    </div>
};

export default ItemList;