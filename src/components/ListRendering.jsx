import React from 'react'

const ListRendering = () => {

    //This is for simple words or for using map with fragments with normal array:

    // let names=['abc','xyz','pqr','stu','wxy','def']
    // let result=names.map((item,index)=><h1 key={index}>{item}</h1>)
    // return (
    // <div>
    //     {names.map((item,index)=><React.Fragment key={index}>{item}</React.Fragment>)}
    //     {result}

    
    //This is for Images:

    // let ProductList=[
    //     {id:101,name:'product1',image:'a.jpg',price:20000,qty:20},
    //     {id:102,name:'product2',image:'b.jpg',price:10000,qty:10},
    //     {id:103,name:'product3',image:'c.jpeg',price:30000,qty:20},
    //     {id:104,name:'product4',image:'d.jpg',price:20000,qty:50},
    //     {id:105,name:'product5',image:'a.jpg',price:10000,qty:20},
    //     {id:106,name:'product6',image:'b.jpg',price:25000,qty:60} ]
        
    //     return (
    //     <>

    //     <div class="table-responsive">
    //         <table class="table table-bordered table-striped">
    //             <thead>
    //                 <tr>
    //                     <th scope="col">ID</th>
    //                     <th scope="col">Name</th>
    //                     <th scope="col">Image</th>
    //                     <th scope="col">Price</th>
    //                     <th scope="col">Qty</th>
    //                 </tr>
    //             </thead>
    //             <tbody>
    //                 {ProductList.map((product,index)=>
    //                     <tr class="">
    //                         <td scope="row">R1C1</td>
    //                         <td>R1C2</td>
    //                         <td>R1C3</td>
    //                         <td>Item</td>
    //                         <td>Item</td>
    //                     </tr>)}
    //                     <tr class="">
    //                         <td scope="row">Item</td>
    //                         <td>Item</td>
    //                         <td>Item</td>
    //                     </tr>
    //             </tbody>
    //         </table>
    //     </div>
    

    //This is for key Id:

    // let ProductList=[
    //     {id:101,name:'product1',image:'a.jpg',price:20000,qty:20},
    //     {id:102,name:'product2',image:'b.jpg',price:10000,qty:10},
    //     {id:103,name:'product3',image:'c.jpeg',price:30000,qty:20},
    //     {id:104,name:'product4',image:'d.jpg',price:20000,qty:50},
    //     {id:105,name:'product5',image:'a.jpg',price:10000,qty:20},
    //     {id:106,name:'product6',image:'b.jpg',price:25000,qty:60} ]
        
    //     return (
    //     <>
    //     <div class="table-responsive">
    //         <table class="table table-bordered table-striped">
    //             <thead>
    //                 <tr>
    //                     <th scope="col">ID</th>
    //                     <th scope="col">Name</th>
    //                     <th scope="col">Image</th>
    //                     <th scope="col">Price</th>
    //                     <th scope="col">Qty</th>
    //                 </tr>
    //             </thead>
    //             <tbody>
    //                 {ProductList.map((product,index)=>
    //                     <tr key={product.id}>
    //                         <td scope="row">{product.id}</td>
    //                         <td>{product.name}</td>
    //                         <td>{product.image}</td>
    //                         <td>{product.price}</td>
    //                         <td>{product.qty}</td>
    //                     </tr>)}
    //             </tbody>
    //         </table>
    //     </div>


    //This is for Image tag:

    // let ProductList=[
    //     {id:101,name:'product1',image:'a.jpg',price:20000,qty:20},
    //     {id:102,name:'product2',image:'b.jpg',price:10000,qty:10},
    //     {id:103,name:'product3',image:'c.jpeg',price:30000,qty:20},
    //     {id:104,name:'product4',image:'d.jpg',price:20000,qty:50},
    //     {id:105,name:'product5',image:'a.jpg',price:10000,qty:20},
    //     {id:106,name:'product6',image:'b.jpg',price:25000,qty:60} ]
        
    //     return (
    //     <>
    //     <div class="table-responsive">
    //         <table class="table table-bordered table-striped">
    //             <thead>
    //                 <tr>
    //                     <th scope="col">ID</th>
    //                     <th scope="col">Name</th>
    //                     <th scope="col">Image</th>
    //                     <th scope="col">Price</th>
    //                     <th scope="col">Qty</th>
    //                 </tr>
    //             </thead>
    //             <tbody>
    //                 {ProductList.map((product,index)=>
    //                     <tr key={product.id}>
    //                         <td scope="row">{product.id}</td>
    //                         <td>{product.name}</td>
    //                         <td>
    //                             <img src={require(`../assests/images/${product.image}`)} width='50px' height='50px'/>
    //                         </td>
    //                         <td>{product.price}</td>
    //                         <td>{product.qty}</td>
    //                     </tr>)}
    //             </tbody>
    //         </table>
    //     </div>

    //For Product Destructuring:
    let ProductList=[
        {id:101,name:'product1',image:'a.jpg',price:20000,qty:20},
        {id:102,name:'product2',image:'b.jpg',price:10000,qty:10},
        {id:103,name:'product3',image:'c.jpeg',price:30000,qty:20},
        {id:104,name:'product4',image:'d.jpg',price:20000,qty:50},
        {id:105,name:'product5',image:'a.jpg',price:10000,qty:20},
        {id:106,name:'product6',image:'b.jpg',price:25000,qty:60} ]
        
        return (
        <>
        <div class="table-responsive">
            <table class="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Image</th>
                        <th scope="col">Price</th>
                        <th scope="col">Qty</th>
                    </tr>
                </thead>
                <tbody>
                    {ProductList.map((product,index)=>{
                        let {id,name,image,price,qty}=product
                        return(
                            <tr key={id}>
                            <td scope="row">{id}</td>
                            <td>{name}</td>
                            <td>
                                <img src={require(`../assests/images/${image}`)} width='50px' height='50px'/>
                            </td>
                            <td>{price}</td>
                            <td>{qty}</td>
                            </tr>
                        )}
                    )}
                </tbody>
            </table>
        </div>


        </>

    )
}

export default ListRendering
