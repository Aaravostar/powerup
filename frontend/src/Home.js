import React, { useEffect, useState } from 'react'
import BrandList from './BrandList'

const Home = () => {
    const [beanBrands, setbeanBrands] = useState ([
        {id: "1", name:"Starbucks", desc:"Very good"},
        {id: "2", name:"Aroma", desc:"Very good"},
        {id: "3", name:"Nestle", desc:"OK"}
    ]);

    const handleDelete = (id) => {
        const newBrands = beanBrands.filter(brand => brand.id !== id);
        setbeanBrands(newBrands);
    };
    
    const [name, setName] = useState('Mario');
   
    const handleClick = () => {
        setName('Luigi');
    };

    useEffect(() => {
        console.log('useEffect ran');
    }, [name]);

    return (
      <div className="home">
          <h2>My Homepage</h2><br></br>
          <BrandList brands={beanBrands} title="Coffee by brand" handleDelete = { handleDelete }/><br></br>
          <BrandList brands={beanBrands.filter((beanBrands) => beanBrands.desc === 'Very good')}
          title="Very good coffee"/><br></br>
          <button onClick= { handleClick } >Click Me</button><br></br>
          <p>{ name }</p>
      </div>
    )
};

export default Home