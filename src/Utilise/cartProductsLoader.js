
import {getJobItem} from '../Utilise/Utilse';

const cartProductsLoader = async () => {
    const cartProduct = await fetch('/featuredJob.json');
    const products = await cartProduct.json();

    const storedCart = getJobItem()

    const saveCart = [];

    for(const id in storedCart){
        const addedProduct = products.find((pd)=> pd.id === id);
        saveCart.push(addedProduct);
         
    }
    
    return saveCart;

}

export {cartProductsLoader} 