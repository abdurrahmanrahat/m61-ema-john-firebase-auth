import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        // fetch url
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    useEffect(() => {
        const storedCart = getShoppingCart();
        let savedCart = [];

        // step 01- get id
        for (const id in storedCart) {
            // step 02- (get the product using id) find with products for checking weather id is matched or not.
            const addedProduct = products.find(product => product.id === id)
            // step 03- get quantity of the product
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                // step 04- add the addedProduct to the savedCart
                savedCart.push(addedProduct);
            }
            // step 05- set the cart
            setCart(savedCart);
            console.log(addedProduct);
        }
    }, [products])

    
    const handlerAddToCart = (product) => {
        // console.log(product);
        // React JS এ array তে push করা যায় না, নতুন array বানিয়ে পাঠানো লাগে set function এ।
        const newCart = [...cart, product];
        setCart(newCart);


        // এই function টা just id parameter হিসেবে নিবে।
        addToDb(product.id)
    }
    


    /*
    const handlerAddToCart = (product) => {
        // console.log(product);
        // React JS এ array তে push করা যায় না, নতুন array বানিয়ে পাঠানো লাগে set function এ।
        let newCart = [];


        // if product doesn't exist in the cart, then set quantity = 1
        // if exist , update quantity by 1
        const exists = cart.find(pd => pd.id === product.id);
        if (!exists) {
            product.quantity = 1;
            // newCart = [...Cart, product];
            newCart = [...Cart, product]
        }
        else {
            exists.quantity = exists.quantity + 1;
            const remaining = cart.filter(pd => pd.id !== product.id);
            newCart = [...remaining, exists];
        }
        // এই function টা just id parameter হিসেবে নিবে।
        addToDb(product.id)
    }
    */



    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handlerAddToCart={handlerAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;