import {create} from 'zustand';

export const useProductStore=create(()=>({
    products:[],
    setProducts:(products)=>set({products}),
    createProduct:async(newProduct) =>{
        if(!newProduct.name || !newProduct.image || !newProduct.price)
        {
            return {seccuess: false, message: "Please fill in all the required fields" };
        }
        const res= await fetch("/api/products",{
            method:"POST",
            header:{
                "Content-type":"application/json"
            },
            body:JSON.stringify(newProduct)
        }
        )
    }
}));

//A function wrapped in () means you are returning an object.