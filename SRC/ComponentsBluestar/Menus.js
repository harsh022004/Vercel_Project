import React from 'react'
import '../ComponentsBluestar/Menu.css'
const Menu = ({data}) => {
  return (
    <div className='C'>
    <main className='product-space'>
        <div className='container'>
        <div className="row">
        {
            data.map((menuItems) => {
                const {id,title,img,desc,price} = menuItems;
                return (
                    <div className='col'>
                       <article key={id} className="main-div">
                       <div className="main-img">
                            <img src={img} alt="" />
                            </div>
                            <div className="content">
                                <div className="title">
                                    <h1>{title}</h1>
                                    
                                </div>
                                <h4>₹{price}</h4>
                                <div>
                                    <div className='bu1'>
                                <button className='bu'>Odear Now</button>
                                </div>
                            </div>
                            </div>

                       </article>
                       
                    </div>
                )
    
            })
       }
        </div>
    

    </div>
    </main>
    </div>
  )
}

export default Menu;