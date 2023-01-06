import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit'

import CartItem from './CartItem';
import { clearCart, getCartItems, getCartTotal } from '../store/slices/CartSlice';

const CartContainer = () => {

    const { items, totalCost } = useSelector( ({ cart }) => cart);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCartTotal())
    },[items])

  if(items.lenght === 0){
    return(
        <>
            <h3 className="fs-bold mt-4">
                {" "}
                Your Shoping{" "}
                <span>
                    <MDBIcon fas icon="shopping-bag"></MDBIcon>
                </span>{" "}
                is Empty
            </h3>
            <MDBBtn className="mx-2" onClick={()=>dispatch(getCartItems())}>Get Items</MDBBtn>
        </>
    )
  }

  return (
    <div>
        <h2 className="lead-mb-0 mt-2">Shopping Cart</h2>
        {items.map(item => <CartItem key={item.id} {...item} />)}
        <footer>
            <hr />
            <div>
                <h4 
                    style={{ 
                        display: "flex",
                        justifyContent: "justify-between",
                        marginRight: "60px"
                     }}
                >Total:&emsp;<span>$ {totalCost}</span></h4>
            </div>
            <MDBBtn color="danger" style={{ width: "140px", marginTop: "50px" }} onClick={() => dispatch(clearCart)}>Clear Cart</MDBBtn>
        </footer>
    </div>
  )
}

export default CartContainer

