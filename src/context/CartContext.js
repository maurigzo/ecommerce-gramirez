import React, { useContext, useState, useEffect } from 'react';
import { getFirestore } from '../firebase/index';
import * as firebase from 'firebase/app';
import 'firebase/firestore';

export const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

export function CartProvider({ children }) {
    const [itemList, setItemList] = useState([]);
    const [items, setItems] = useState([]);
    const [userInfo, setUserInfo] = useState({ name: "", email: "", phone: "" });
    const [orderId, setOrderId] = useState();
    const [loading, setLoading] = useState(true);

    function addItem(i) {
        var currentItemIndex = -1;

        if (itemList.length > 0) {
            currentItemIndex = itemList.find(e => e.id === i.id) === undefined ? -1 : itemList.find(e => e.id === i.id);
        };

        if (currentItemIndex === -1) {
            const myNewItem = items.find(e => e.id === i.id);
            myNewItem.amount = i.amount;
            const c = [...itemList, myNewItem];
            c[c.length - 1].price = parseFloat(c[c.length - 1].price) * (i.amount);
            setItemList(c);
        }
        else {
            const indexFind = itemList.findIndex((cartItem) => i.id === cartItem.id);
            const c = [...itemList];
            c[indexFind].amount += i.amount;
            c[indexFind].price = parseFloat(c[indexFind].price) * (c[indexFind].amount);
            setItemList(c);
        }
    };

    function getQuantity() {
        return itemList.reduce((a, b) => a + b.amount, 0);
    };

    function getTotal() {
        return itemList.reduce((a, b) => a + b.price, 0);
    };

    function onNameChange(event) {
        setUserInfo({ ...userInfo, name: event.target.value });
    };

    function onEmailChange(event) {
        setUserInfo({ ...userInfo, email: event.target.value });
    };

    function onPhoneChange(event) {
        setUserInfo({ ...userInfo, phone: event.target.value });
    };

    function generateOrder() {
        const db = getFirestore();
        const orders = db.collection("orders");
        const newOrder = {
            buyer: userInfo,
            items: itemList,
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            total: getTotal()
        };

        orders.add(newOrder).then(({ id }) => {
            setOrderId(id);
        }).catch(err => {
            console.log("error :"+ err);
        }).finally(()=>{
            setLoading(false);
        });
    }

    useEffect(() => {
        const db = getFirestore();
        const itemCollection = db.collection('items');
        itemCollection.get().then((querySnapshot) => {
            querySnapshot.size === 0 && console.log('No items found');
            setItems(querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));
        });
    }, []);

    return <CartContext.Provider value={{
        itemList, addItem, quantity: getQuantity, getTotal: getTotal, userInfo,
        onNameChange, onEmailChange, onPhoneChange, generateOrder, orderId, loading
    }}>
        {children}
    </CartContext.Provider>

}