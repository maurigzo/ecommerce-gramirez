import React, { useEffect, useState } from 'react';
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import loadingSpin from '../../assets/loadingSpin.svg';
import LoadingSpin from '../../components/LoadingSpin/LoadingSpin';
import { useParams } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import { getFirestore } from '../../firebase/index';
import { NavLink } from 'react-router-dom';

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
            setLoading(false);
            doc.exists && setItem({ ...doc.data(), id: doc.id });
        });
    }, [id]);

    return <div>
        {loading ? <LoadingSpin image={loadingSpin} /> :
            item.id === undefined ?
                <div className="alert alert-danger" role="alert">
                    Item not found
        <br />
                    <NavLink to='/' className="alert-link">Press here to return to the homepage.</NavLink>
                </div>
                : <ItemDetail item={item} addItem={addNewItem} />}
    </div>
};

export default ItemDetailContainer;