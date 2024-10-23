import React from 'react';
import { menu_list } from '../../assets/assets';
import './Exploremenu.css';

const ExploreMenu = ({category , setCategory}) => {

  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore Our Menu</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae officia deserunt maxime delectus, iste odio?</p>
      <div className="explore-menu-list">
        {
          menu_list.map((item) => {
            return (
                <div onClick={() => setCategory(prev => prev===item.menu_name ? "All" : item.menu_name)} className="explore-menu-item">
                    <img className ={category===item.menu_name ? "active" : ""} src={item.menu_image} alt="" />
                    <p>{item.menu_name}</p>
                </div>
            )
          })
        }
      </div>
      <hr />
      
    </div>
  )
}

export default ExploreMenu
