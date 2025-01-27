import React from 'react'
import CartItem from '../components/CartItem'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { cartData } from '../data/homeData'
import {TfiHandPointRight} from 'react-icons/tfi'
import '../styles/Cart.css'

function Cart() {
    const [totalCost, setTotalCost] = React.useState(0);
    const showCartItems = cartData.map((item, index) => {
        return(
            <CartItem key={index} pizza={item} setTotalCost={setTotalCost}/>
        );
    })
    return (
        <div
        style={{marginTop : "150px"}}>
            <Header />
                <div className="cart-title">𝒞𝒜𝑅𝒯</div>
                <div className="cart-items-container">
                    {showCartItems}
                </div>
                <div className="total-cost">
                    Total Payable : ₹{totalCost}
                </div>
                <div className="payment-options">
                    <h2>Payment options</h2>
                    <div className="option-container">
                        <div className="cod">
                            <img src="https://cdn-icons-png.flaticon.com/512/6491/6491490.png" alt="cash on delivery" />
                            <p>Cash on delivery</p>
                        </div>
                        <div className="card">
                            <img src="https://cdn-icons-png.flaticon.com/512/4341/4341764.png" alt="card" />
                            <p>Credit card</p>
                        </div>
                    </div>
                </div>
                <div className="address-container">
                    <input type="text" className='address' placeholder='Your address' />
                    <button>
                        Place order <TfiHandPointRight />
                    </button>
                </div>
            <Footer />
        </div>
    )
}

export default Cart