
import data from './data.js';

export const  getProductByID = (id)=>{

    const product = data.products.find((prod)=> prod._id === id);

    return product;

}



//mongodb+srv://mahmoud:admin@taskmanagerdb.rd2ff.mongodb.net/BookStorDB?retryWrites=true&w=majority