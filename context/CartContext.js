import React, { Component } from 'react';
import { get } from 'react-native/Libraries/Utilities/PixelRatio';

export const CartContext = React.createContext();

export class CartProvider extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cartItems: [],
            total: 0
        }

        this.getTotal = this.getTotal.bind(this);
        this.increaseQuantity = this.increaseQuantity.bind(this);
        this.decreaseQuantity = this.decreaseQuantity.bind(this);
        this.checkExist = this.checkExist.bind(this);
        this.addToCart = this.addToCart.bind(this);
    }

    getTotal(cartItems) {
        let total = 0;
        cartItems.forEach(item => {
            total += item.quantity * item.price;
        })
        this.setState({
            total: total
        })
    }

    increaseQuantity(product) {
        const cartItems = this.state.cartItems;
        let arr = cartItems.slice();
        let arrItem = arr.find(item => {
            return item.id === product.id
        });
        arrItem.quantity = arrItem.quantity + 1;
        this.setState({
            cartItems: arr
        })
        this.getTotal(cartItems);
    }

    decreaseQuantity(product) {
        const cartItems = this.state.cartItems;
        let arr = cartItems.slice();
        let index;
        let arrItem = arr.find(item => {
            return item.id === product.id
        });

        if (arrItem.quantity > 0) {
            arrItem.quantity = arrItem.quantity - 1;
        }
        if (arrItem.quantity < 1) {
            index = arr.indexOf(arrItem);
            arr.splice(index, 1);
        }   
        this.setState({
            cartItems: arr
        })
        this.getTotal(cartItems);
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
            this.setState({
                total: product.price * product.quantity
            })
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
                arrItem.quantity = arrItem.quantity + 1;
                this.setState({
                    cartItems: arr
                })
            }
            this.setState({
                total: this.state.total + (product.quantity * product.price)
            })
        }
    }

    render() {
        return (
            <CartContext.Provider
                value={{
                    cartItems: this.state.cartItems,
                    total: this.state.total,
                    addToCart: this.addToCart,
                    increaseQuantity: this.increaseQuantity,
                    decreaseQuantity: this.decreaseQuantity,
                }}
            >
                { this.props.children }
            </CartContext.Provider>
        )
    }
}