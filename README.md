const Item = () => {
return(

<div className='card'>
<div>
<img className='img-product' src={iphone} alt="" />
<p>Apple iPhone 13 (128GB) - Blue</p>

            <div className='star-price'>
                <div className='star'>
                    <div className='stars'><img src={star} alt="" /></div>
                    <div className='stars'><img src={star} alt="" /></div>
                    <div className='stars'><img src={star} alt="" /></div>
                    <div className='stars'><img src={star} alt="" /></div>
                    <div className='stars'><img src={star} alt="" /></div>
                </div>

                <div className="price">
                <div className="old-price">9999/-</div>
                <div className="new-price">7999/-</div>
                </div>
            </div>
            <button className='btn-cart'>
             <h4 className='btn-text-cart'>ADD TO CART</h4>
            </button>
        </div>

    </div>

)
}

return (
<>
<div className='product-container'>
<h3 className='header-product'>Products</h3>
<div className='row'>

          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
         </div>
    </div>


    </>

)
