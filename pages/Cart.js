import React, { useContext, useState } from 'react';
import {Switch , Route , Link} from 'react-router-dom';
import {Context} from '../Context';
import CartItem from '../component/CartItem';
function Cart() {
	const {cartItems , emptyCart} = useContext(Context);
	const [buy , setBuy] = useState("Buy");
	const cartItemElements = cartItems.map(item => (
	  <CartItem key={item.id} item={item}/>
	))

 console.log(cartItems);
 function placeOrder () {
	setBuy('Ordering...') 
	setTimeout(() => {
		emptyCart()
		setBuy ('buy')
	} , 3000)
}

	const total = cartItems.length * 1000;
	const totalCoast = total.toLocaleString("en-US", {style: "currency", currency: "USD"}) 
	return (
		<main className="cart-page">
			<h1>Check out</h1>
			{cartItemElements}
			<p className ="total-cost"> total : {totalCoast} </p>
			<div className="order-button">
				{cartItems.length > 0 ?
					<button onClick={() =>  placeOrder()}>{buy}</button>  : 
					<p>You have no items</p>}
			</div>
		</main>
	);
}

export default Cart;
