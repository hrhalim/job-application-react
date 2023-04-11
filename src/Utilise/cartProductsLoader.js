
import {getJobItem} from '../Utilise/Utilse';

const cartProductsLoader = async () => {
    const cartProduct = await fetch('/featuredJob.json');
    const jobs = await cartProduct.json();

    const storedCart = getJobItem()

    const saveCart = [];

    for(const id in storedCart){
        const addedProduct = jobs.find((jobItem)=> jobItem.id === id);
        saveCart.push(addedProduct);
         
    }
    
    return saveCart;

}

export {cartProductsLoader} 