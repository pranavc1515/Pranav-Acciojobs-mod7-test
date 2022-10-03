import iphone from '../images/iphone.svg'
import star from '../images/star.svg'
import './Product.scss'
import React, {useState, useEffect} from 'react'
// import axios from 'axios'

const Products = () => {
    const [data, setData] = React.useState({});

    let apiData = [];
  
    React.useEffect(() => {
      fetch(
        "https://acciojob-module-7-sept-2022-default-rtdb.asia-southeast1.firebasedatabase.app/products.json"
      )
        .then((res) => res.json())
        .then((res) => {
            
          for (const item in res) { 
            
            apiData.push(res[item]);
          }
          console.log(apiData)
          setData(apiData);
        });
        }, []);
   
    let allCards = "";
  
    if (data.length > 0) {
      allCards = data.map((item) => (
        <Item
          id={item.id}
          key ={item.id}
          name={item["productName"]}
          img={item["productImage"]}
          oldPrice={item["oldPrice"]}
          newPrice={item["newPrice"]}
        />
      ));
    }

  return (
    <>
    <div className='product-container'>
        <h3 className='header-product'>Products</h3>
       <div className='row'>
         {allCards} 
        </div>
    </div>   
        </>
    )
}
const Item = (props) => {
    console.log(props)
    const {Item} = props
    return(
    
    <div className='card'>
    <div>
            <img className='img-product' src={props.img} alt="" />
            <p className='prop-name'>{props.name}</p>
    
                <div className='star-price'>
                    <div className='star'>
                        <div className='stars'><img src={star} alt="" /></div>
                        <div className='stars'><img src={star} alt="" /></div>
                        <div className='stars'><img src={star} alt="" /></div>
                        <div className='stars'><img src={star} alt="" /></div>
                        <div className='stars'><img src={star} alt="" /></div>
                    </div>
    
                    <div className="price">
                    <div className="old-price">{props.oldPrice}</div>
                    <div className="new-price">{props.newPrice}</div>
                    </div>
                </div>
                <button className='btn-cart'>
                 <h4 className='btn-text-cart'>ADD TO CART</h4>
                </button>
            </div>
    
        </div>
    
    )
    }

export default Products;