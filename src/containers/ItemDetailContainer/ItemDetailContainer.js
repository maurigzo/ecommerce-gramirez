import React, { useEffect, useState } from 'react';
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import loadingSpin from '../../assets/loadingSpin.svg';
import LoadingSpin from '../../components/LoadingSpin/LoadingSpin';
import { useParams } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import { getFirestore } from '../../firebase/index';

function ItemDetailContainer() {
    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    const { addItem } = useCartContext();

    function addNewItem(i, a) {
        addItem({ id: i, amount: a });
    }

    useEffect(() => {
        const db = getFirestore();
        const itemCollection = db.collection('items');
        const filteredItem = itemCollection.doc(id);
        filteredItem.get().then((doc) => {
            !doc.exists && console.log('No item found');
            setLoading(false);
            setItem({ ...doc.data(), id: doc.id });
        });
    }, [id]);

    // useEffect(() => {
    //     const getItem = new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             resolve(
    //                 [{ id: 1, title: 'Item 1', description: 'my description 1', price: '10,00', image: 'http://placehold.it/256/163a63', initial: 1, min: 1, max: 10 },
    //                 { id: 2, title: 'Item 2', description: 'my description 2', price: '20,00', image: 'http://placehold.it/256/163a63', initial: 1, min: 1, max: 20 },
    //                 { id: 3, title: 'Item 3', description: 'my description 3', price: '30,00', image: 'http://placehold.it/256/163a63', initial: 1, min: 1, max: 30 }]
    //             )
    //         });
    //     });

    //     getItem.then(response => {
    //         setItem(response.find(e => e.id == id));
    //         setLoading(false);
    //     });
    // }, [id]);

    return <div>
        {loading ?
            <LoadingSpin image={loadingSpin} /> :
            <ItemDetail
                id={item.id}
                title={item.title}
                description={item.description}
                price={item.price}
                image={item.image}
                initial={item.initial}
                min={item.min}
                max={item.max}
                addItem={addNewItem} />
        }
    </div>
};

export default ItemDetailContainer;