import React from "react";
import { useGetAllProductsQuery } from "./productApi";


const Products = ()=>{
    const data = useGetAllProductsQuery;
    console.log(data)

    return (
        <div>
            

        </div>
    )
}
export default Products;