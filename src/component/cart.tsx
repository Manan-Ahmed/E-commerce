"use client"




// components/Cart.js
import { useState } from 'react';
import styles from './Cart.module.css';

const Cart = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCart = () => {
        setIsOpen(!isOpen);
    };

    const items = [
        { id: 1, name: "Item 1", price: 29.99 },
        { id: 2, name: "Item 2", price: 19.99 },
    ];

    const totalPrice = items.reduce((total, item) => total + item.price, 0);

    return (
        <div>
            <button onClick={toggleCart} className={styles.cartButton}>
                {isOpen ? 'Close Cart' : 'Open Cart'}
            </button>
            {isOpen && (
                <div className={`${styles.cart} ${isOpen ? styles.active : ''}`}>
                    <h2>Your Cart</h2>
                    {items.length > 0 ? (
                        items.map(item => (
                            <div key={item.id} className={styles.cartItem}>
                                <h3>{item.name}</h3>
                                <p>Price: ${item.price.toFixed(2)}</p>
                                <button className={styles.removeButton}>Remove</button>
                            </div>
                        ))
                    ) : (
                        <p>Your cart is empty.</p>
                    )}
                    <h3>Total: ${totalPrice.toFixed(2)}</h3>
                </div>
            )}
        </div>
    );
};

export default Cart;
