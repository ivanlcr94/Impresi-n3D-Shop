import {createContext, useState, React} from 'react';

export const CartContext = createContext({

});

const {Provider} = CartContext;




export const CartProvider = ({defaultValue = [], children}) => {

    const [cart, setCart] = useState(defaultValue);
    
    const clearCart = () => {
        setCart([]);
    }

    const addToCart = (item, quantity) => {

        if(isInCart(item.id)) {
            const newCart = [...cart]
            for(const element of newCart){
                    if(element.item.id === item.id) {
                    element.quantity = element.quantity + quantity;
                }

            }

            setCart(newCart);

        } else {

            setCart(
                [
                    ...cart,
                    {
                        item: item,
                        quantity: quantity
                    }
                ]
            )
        }
    }

    const isInCart = (id) => {
        return cart.find((element) => element.item.id === id)
    }

    const removeFromCart = (id) => {
        const newCart = [...cart].filter((element => element.item.id !== id))
        setCart(newCart);
    }

    //cantidad total de productos,
  const getQuantity = () => {
    let cantidad = 0;
    cart.forEach((item) => (cantidad = cantidad + item.quantity));
    return cantidad;
  };

  //Multiplicar precio segun al cantidad
  const getTotal = () => {
    let total = 0;
    cart.forEach((item) => {
      total = total + item.quantity * item.item.precio;
    });
    return Intl.NumberFormat("es-AR").format(total);
  };

    const context = {
        cart,
        clearCart,
        addToCart,
        removeFromCart,
        getQuantity,
        getTotal

    }

    return (

       <Provider value={context}>
        {children}
       </Provider> 

    )

}