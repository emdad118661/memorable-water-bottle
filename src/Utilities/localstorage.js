const getStoredCart = () =>{
    const storedCardString = localStorage.getItem('cart');
    if(storedCardString){
        return JSON.parse(storedCardString);
    }
    return [];
}

const saveCartToLS = (cart) =>{
    const cartStringyfied = JSON.stringify(cart);
    return localStorage.setItem('cart', cartStringyfied);
}

const addToLS =(id)=>{
    const cart = getStoredCart();
    cart.push(id);
    //save data to LS
    saveCartToLS(cart);

}

export {addToLS, getStoredCart}