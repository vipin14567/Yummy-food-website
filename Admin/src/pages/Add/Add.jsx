import React, { useState } from 'react'
import './Add.css'
import { assets } from '../../assets/assets'
import axios from 'axios'
import { toast } from 'react-toastify'

const Add = ({url}) => {

  const [image , setImage] = useState(false);
  const [data , setData] = useState({
    name:'',
    category:'Salad',
    price:'',
    description:''
  })

  const onChangeHandler = (event) =>{
        const name = event.target.name;
        const value = event.target.value;
        setData(data => ({
          ...data,[name]:value }))
  }

  const onSunbmitHandler = async(event) =>{
        event.preventDefault();
        const formData = new FormData();
        formData.append('name',data.name);
        formData.append('category',data.category);
        formData.append('price',Number(data.price));
        formData.append('description',data.description);
        formData.append('image',image);
        const response = await axios.post(`${url}/api/food/add` ,formData);

        if(response.data.success) {
            setData({
              name:'',
              category:'Salad',
              price:'',
              description:''
            })
            setImage(false);
            toast.success(response.data.message)
        }
        else{
            toast.error(response.data.message)
        }
  }

  return (
    <div className='add' onSubmit={onSunbmitHandler}>
      <form className='flex-col'>
        <div className="add-image-upload flex-col">
            <p>Upload Image</p>
            <label htmlFor="image">
                <img src={image ? URL.createObjectURL(image):assets.upload_area } alt="" />
            </label>
            <input type="file" id='image' hidden required onChange={(e)=>setImage(e.target.files[0])}/>
        </div>

        <div className="add-product-name flex-col">
            <p>Product Name</p>
            <input type="text" name='name' placeholder='type here'
            onChange={onChangeHandler} value={data.name}/>
        </div>
        <div className="add-product-desc flex-col">
            <p>Product Description</p>
            <textarea 
            onChange={onChangeHandler} value={data.description}
            name="description" rows='6' placeholder='right-content'></textarea>
            </div>
        <div className="category-price">
            <div className="add-category flex-col">
                <p>Product Category</p>
                <select name="category" onChange={onChangeHandler}>
                    <option value="Salad">Salad</option>
                    <option value="Rolls">Rolls</option>
                    <option value="Deserts">Deserts</option>
                    <option value="Sandwich">Sandwich</option>
                    <option value="Cake">Cake</option>
                    <option value="Pure Veg">Pure Veg</option>
                    <option value="Pasta">Pasta</option>
                    <option value="Noodles">Noodles</option>
                </select>
            </div>  
            <div className="add-price flex-col">
                <p>Product Price</p>
                <input type="number" name='price' placeholder='$20'
                onChange={onChangeHandler} value={data.value}/>
            </div>  
        </div>
        <button type='submit' className='add-btn'>Add</button>
      </form>
    </div>
  )
}

export default Add
