import React from 'react'

const BrandList = ({brands , title, handleDelete}) => {

  return (
    <div className='brand-list'>
        <h3>{title}</h3>
        {brands.map((brand) => (
            <div className="beanBrands" key={brand.id}>
                <h3>{brand.name}</h3>
                <p>Rating: <br></br>{brand.desc}</p>
                <button onClick={() => handleDelete(brand.id)}>Delete brand</button><br></br>
            </div>
        ))}  
    </div>
  )
}

export default BrandList