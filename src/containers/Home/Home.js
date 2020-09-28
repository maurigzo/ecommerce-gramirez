import React, { useState, useEffect } from 'react';
import Salute from '../../components/Salute/Salute';
import ItemList from '../../components/ItemList/ItemList';
import { getFirestore } from '../../firebase/index';
import { useParams } from 'react-router-dom';

function Home({ greeting }) {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoryid } = useParams();

    useEffect(() => {
        const db = getFirestore();

        const itemCollection = db.collection('items');
        const filteredItems = categoryid !== undefined
            ? itemCollection.where('category', '==', categoryid).orderBy('title')
            : itemCollection.orderBy('title');

        filteredItems.get().then((querySnapshot) => {
            querySnapshot.size === 0 && console.log('No items found');

            setLoading(false);
            setItems(querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));
        });
    }, [categoryid]);

    return <header className="App-header">
        <Salute greeting={loading ? 'loading...' : greeting} />
        <ItemList items={items} />
    </header>
}

export default Home;