const addToDb = id => {
    let addJob = getaddJob(); 
    const quantity = addJob[id];
    if (!quantity) {
        addJob[id] = 1;
    }
    else {
        const newQuantity = quantity + 1;
        addJob[id] = newQuantity;
    }
    localStorage.setItem('job-item', JSON.stringify(addJob));
}

const getaddJob = () => {
    let addJob = {};

    const storedCart = localStorage.getItem('job-item');
    if (storedCart) {
        addJob = JSON.parse(storedCart);
    }
    return addJob;
}


export {
    addToDb,
    getaddJob,
}