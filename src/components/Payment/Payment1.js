import React, { useState } from "react";
import "./Payment.css";
import { useStateValue } from "../../StateProvider";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import { Link } from "react-router-dom";
import { useNavigate  } from "react-router-dom";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../../reducer";
import { db } from "../Firebase/firebase";
const Payment = () => {
	const [{ basket, user }, dispatch] = useStateValue();
	const stripe = useStripe();
	const elements = useElements();
	const navigate  = useNavigate ();

	const saveOrder=()=>{
		db.collection("orders")
        .doc("order - "+ Math.floor(Math.random() * 500))
        .set({
			user_email:user.email,
			status:'completed',
			products:[...basket]
		})
		
		navigate('/profile')
	}
	return (
		<div className="payment">
			<div className="payment__container">
				<h1>
					Checkout (<Link to="/checkout">{basket?.length} items</Link>)
				</h1>

				<section className="payment__section">
					<div className="payment__title">
						<h3>Delivery Adress</h3>
					</div>
					<div className="payment__address">
						<p>{user?.email}</p>
						<p>jordan</p>
						<p>amman</p>
					</div>
				</section>

				<section className="payment__section">
					<div className="payment__title">
						<h3>Review item and delivery</h3>
					</div>
					<div className="payment__items">
						{basket.map((item) => (
							<CheckoutProduct
								id={item.id}
								title={item.title}
								image={item.image}
								price={item.price}
								rating={item.rating}
							/>
						))}
					</div>
				</section>
				<section className="payment__section">
					<div className="payment__title">
						<h3>Payment method</h3>
					</div>
					<div className="payment__details">
							<CardElement />
							<div className="payment__priceContainer">
								<CurrencyFormat
									renderText={(value) => <h3>Order Total:{value}</h3>}
									decimalScale={2}
									value={getBasketTotal(basket)}
									displayType={"text"}
									thousandSeparator={true}
									prefix={"$"}
								/>
							</div>
							<button onClick={()=> {saveOrder()}}>Buy Now</button>
					</div>
				</section>
			</div>
		</div>
	);
};

export default Payment;