import React from 'react'
import '../ComponentsBluestar/Menu.css'
const Categories = ({filterItems, categories}) => {
  return (
    <div className='C'>
<div className='container'>
    <div className="row">
        <div className="col-md-8 mx-auto">
            <div className='H'>
        <div className='category-tabs'>
        {
            categories.map((category,index) =>{
                return (

                    <button className='filterItems' onClick={() => filterItems(category)}>{category}</button>
                )
                
            })
        }
    </div>
        </div>
    </div>
</div>
</div>
</div>
  )
}

export default Categories;