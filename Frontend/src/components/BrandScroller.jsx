import React,{useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import "./BrandScroller.css";
import axios from "axios";
import ABHISHEK from "./images/abhishek.jpg"
import ANUP from "./images/shoefact.jpeg"
import ABHIJEET from "./images/columbus.png"
import ANKIT from "./images/shoe.jpg"

const brands = [
  { id: 1, name: "ABHISHEK", image: ABHISHEK },
  { id: 3, name: "ANKIT", image: ANKIT },
  { id: 4, name: "ANUP",image: ANUP },
  { id: 5, name: "ABHIJEET", image: ABHIJEET },
  // Add more brand objects as needed
];
const URL = 'https://greenloop-nw0w.onrender.com/api/v1/search/brand'; // Adjust the URL if needed


const BrandScroller = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate(); // Initialize the navigate function

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(URL, {
          maxBodyLength: Infinity
        });
        setCategories(response.data.data); // Assuming response.data contains the categories
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  const handleCategoryClick = (category) => {
    // Navigate to the category grid for the selected category
    navigate(`/category-grid/brand=${category}`);
  };

  return (
    <div className="brand-cont"> 
    <h3>WHO WE ARE --</h3>
    <div className="brand-container">
      
      {brands.map((brand) => (
        <div key={brand.id} className="brand-card" onClick={ () => handleCategoryClick(brand.name.toUpperCase())}>
          <img src={brand.image} alt={brand.name} />
          <p>{brand.name}</p>
        </div>
      ))}
    </div>
    </div>
  );
};

export default BrandScroller;
