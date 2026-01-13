// import React, { useState } from 'react';
import React  from 'react';

const Cart = ({ cart, setCart }) => {

    // const [price, setPrice] = useState(0);
    // console.log(price);

    return (


        <div>
            {
                cart?.map((item) => (
                    <div className='cart_box' key={item.id} >
                        <div className='cart_img' >
                            <img src={item.img} alt="" ></img>
                            <p>{item.title}</p>
                        </div>

                        <div>
                            <button>+</button>
                            <button>-</button>
                        </div>
                        <div>
                            <span>{item.price}</span>
                            <button>Remove</button>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Cart;