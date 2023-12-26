import {
  CloudUpload,
  Money,
  Description,
  FormatQuote,
  FilterList,
  ShoppingCart,
} from "@material-ui/icons";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link, useParams } from "react-router-dom";
import "./user.css";
import { useState, useEffect } from "react";
import { useSelector } from 'react-redux';

export default function Product() {
  const foodId = useParams();
  const navigate = useNavigate();
  const [food, setFood] = useState({});
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [type, setType] = useState('');
  const [price, setPrice] = useState(0);
  const token = useSelector((state) => state.token);
  const [status, setStatus] = useState('true');

  const handleSelectChange = (e) => {
    setStatus(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updateFood = {
      name,
      desc,
      type,
      price,
      "isAvailable": status === 'true' ? true : false
    };
    
    await axios.put(`http://localhost:3001/foods/${foodId.productId}`, updateFood, {
      headers: { Authorization: `Bearer ${token}` },
    });

    navigate('/products');
  };

  const getFood = async () => { 
    const response = await fetch(`http://localhost:3001/foods/${foodId.productId}`, 
      {
        method: 'GET',
      }
    );
    const data = await response.json();
    setFood(data);
    setName(data.name);
    setDesc(data.desc);
    setPrice(data.price);
    setType(data.type);
  };

  useEffect(() => {
    getFood()
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit Product</h1>
        <Link to="/newProduct">
          <button className="userAddButton">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src={food?.picturePath}
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">{food?.name}</span>
              <span className="userShowUserTitle">{food?.type}</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Food Details</span>
            <div className="userShowInfo">
              <CloudUpload className="userShowIcon" />
              <span className="userShowInfoTitle">ID : {food?._id}</span>
            </div>
            <div className="userShowInfo">
              <FormatQuote className="userShowIcon" />
              <span className="userShowInfoTitle">Name : {food?.name}</span>
            </div>
            <div className="userShowInfo">
              <Description className="userShowIcon" />
              <span className="userShowInfoTitle">Description : {food?.desc}</span>
            </div>
            <div className="userShowInfo">
              <FilterList className="userShowIcon" />
              <span className="userShowInfoTitle">Type : {food?.type}</span>
            </div>
            <div className="userShowInfo">
              <Money className="userShowIcon" />
              <span className="userShowInfoTitle">Price : {food?.price && food?.price.toLocaleString()}VND</span>
            </div>
            <div className="userShowInfo">
              <ShoppingCart className="userShowIcon" />
              <span className="userShowInfoTitle">Status : {food?.isAvailable ? "Available" : "Not Available"}</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Name</label>
                <input
                  type="text"
                  value={name}
                  className="userUpdateInput"
                  onChange={(e) => {
                    setName(e.target.value)
                    // handleChange(e)
                  }}
                  name="name"
                />
              </div>
              <div className="userUpdateItem">
                <label>Description</label>
                <input
                  type="text"
                  value={desc}
                  className="userUpdateInput"
                  onChange={(e) => {
                    setDesc(e.target.value)
                    // handleChange(e)
                  }}
                  name="desc"
                />
              </div>
              <div className="userUpdateItem">
                <label>Type</label>
                <input
                  type="text"
                  value={type}
                  className="userUpdateInput"
                  onChange={(e) => {
                    setType(e.target.value)
                    // handleChange(e)
                  }}
                  name="type"
                />
              </div>
              <div className="userUpdateItem">
                <label>Price</label>
                <input
                  type="text"
                  value={price}
                  className="userUpdateInput"
                  onChange={(e) => {
                    setPrice(e.target.value)
                    // handleChange(e)
                  }}
                  name="price"
                />
              </div>
              <div className="userUpdateItem">
                <label>Status</label>
                <select name="isAvailable" id="active" onChange={handleSelectChange}>
                  <option value="true">Available</option>
                  <option value="false">Not Available</option>
                </select>
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
              </div>
              <button className="userUpdateButton" onClick={handleSubmit}>Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

