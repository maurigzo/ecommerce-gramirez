import React, { useContext, useState } from 'react';

export const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

export function CartProvider({ children }) {
    const [itemList, setItemList] = useState([]);

    const items =
        [{ id: 1, title: 'Item 1', price: '10,00', image: 'http://placehold.it/256/163a63' },
        { id: 2, title: 'Item 2', price: '20,00', image: 'http://placehold.it/256/163a63' },
        { id: 3, title: 'Item 3', price: '30,00', image: 'http://placehold.it/256/163a63' }];

    function addItem(i) {

        var currentItemIndex = -1;
        if (itemList.length > 0) {
            console.log(itemList.find(e => e.id == i.id));
            currentItemIndex = itemList.find(e => e.id == i.id) === undefined ? -1 : itemList.find(e => e.id == i.id);
        };

        if(currentItemIndex=== -1){
            const myNewItem = items.find(e => e.id == i.id);
            myNewItem.amount = i.amount;
            const c = [...itemList, myNewItem];
            console.log(" c[c.length-1].price nuevo: "+ c[c.length-1].price);
            c[c.length-1].price =parseFloat(c[c.length-1].price)*(i.amount);
            setItemList(c);
        }
        else{
            const indexFind = itemList.findIndex(
                (cartItem) => i.id === cartItem.id
              );
            const c = [...itemList];
            c[indexFind].amount += i.amount;
            console.log(" c[indexFind].price viejo: "+ c[indexFind].price);
            c[indexFind].price = parseFloat(c[indexFind].price) *( c[indexFind].amount);

            setItemList(c);
        }
    };

    function getTotal() {
        return itemList.reduce((a, b) => a + b.amount,0);
        
    };

    return <CartContext.Provider value={{ itemList, addItem, quantity: getTotal, getTotal }}>
        {children}
    </CartContext.Provider>

}