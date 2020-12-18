import React, { Component } from 'react';

export const CartContext = React.createContext();

export class CartProvider extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cartItems: []
        }

        this.checkExist = this.checkExist.bind(this);
        this.addToCart = this.addToCart.bind(this);
    }

    checkExist = (product) => {
        const cartItems = this.state.cartItems;
        let count = 0;
        if(cartItems.length === 0) {
            count = count + 1;
        } else {
            cartItems.forEach(item => {
                if(product.id !== item.id) {
                    count = count + 1;
                }
            })
        }
        return count;
    }

    addToCart(product) {
        const cartItems = this.state.cartItems;
        let arr = [];
        if (cartItems.length === 0) {
                product.quantity = product.quantity + 1;
                this.setState({
                cartItems: this.state.cartItems.concat(product)
            });
        } else {
            let item = cartItems.find(cartItem => {
                return cartItem.id === product.id
            })
            if(item === null || item === undefined) {
                product.quantity = product.quantity + 1;
                this.setState({
                    cartItems: this.state.cartItems.concat(product)
                })
            } else {
                arr = cartItems.slice();
                let arrItem = arr.find(item => {
                    return item.id === product.id
                });
                arrItem.quantity = item.quantity + 1;
                this.setState({
                    cartItems: arr
                })
            }
        }
    }

    render() {
        return (
            <CartContext.Provider
                value={{
                    cartItems: this.state.cartItems,
                    addToCart: this.addToCart
                }}
            >
                { this.props.children }
            </CartContext.Provider>
        )
    }
}