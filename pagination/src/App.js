
import   { useEffect,useState }  from 'react';
import './App.css';

function App() {

const[product ,setproduct ] =useState([]);
const [page,setpage] =useState(1);
   
  const fetchproducts = async () =>{
   const res = await fetch('https://dummyjson.com/products?limit=90');
   const data = await res.json();

   if(data && data.products ){
   setproduct(data.products);}

   console.log(product);
  };


  useEffect(()=>{
  fetchproducts();
  },[])

  const increase =() =>{
    if(page< product.length/10)
   setpage(page+1);
   
  }
  const select =(selected) =>{
    setpage(selected)
  }

  const decrease =() =>{
    if(page>1){
    setpage(page-1)}
  }
  
  return (
<div>
  {product.length >0 && (
    <div className='grid grid-cols-3 bg-black'>
      {product.slice(page*10-10,page*10).map((prod) =>{
       return (
        <>
        <span key={prod.id} >
          <img className=' m-4 p-4 object-cover h-96 w-96' src= {prod.thumbnail}/>
        </span>

     
        </>
       );
      })}


    </div>
  )}
{ product.length>0 && (
<div  className='justify-center text-center'>
<span className='cursor-pointer' onClick={decrease}>◀️</span>
{[...Array(product.length/10)].map((_, i)=>{
  return <span className='m-2 gap-2 border-solid border border-gray-400 cursor-pointer' key={i} onClick={()=>select(i+1)}> {i+1}</span>;
})}

<span className='cursor-pointer' onClick={increase}>▶️</span>
</div>

)}

</div>
  );
}

export default App;
