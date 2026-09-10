
import { useState ,useEffect} from "react";
import Card from "./Card"

function Products({query}) {
  //fetch the data from ecommerce backebd api
 
  const [products, setproducts] = useState([])



 useEffect(() => {
   fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => setproducts(data));
 }, [])
 

//filter the products
let filteredproducts=products.filter((n)=>{return n.title.toLowerCase().includes(query.toLowerCase())})



  



  return (
    <>
     <div style={{display:'flex',flexWrap:'wrap',gap:'30px'}}    >

      {
       filteredproducts.map((n)=>{
          return <Card name={n.title} image={n.image} price={n.price}  />
        })
      }
     </div>

    </>
  )
}

export default Products