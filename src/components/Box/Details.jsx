// import React from 'react'
import "./Details.css";
import React, { useContext } from "react";
import { image } from '../../constants';


const Details = () => {
  return (
    <div className="box">
    <div className="box2">
      <div className="form">
        <img src={image.ethToffee} width={250} alt="Toffee" />

        <input
          placeholder="Address To"
          name="addressTo"
          type="text"
          className="form--input"
        />
        <input
          placeholder="Amount (MATIC)"
          name="amount"
          type="number"
          className="form--input"
        />
        <input
          placeholder="Keyword (Gif)"
          name="keyword"
          type="text"
          className="form--input"
        />
        <input
          placeholder="Enter Message"
          name="message"
          type="text"
          className="form--input"
        />

        <button type="button" className="form--button">
          Send now
        </button>
      </div>
      </div>

      <div className="box2">
      <div className="form">
        <img src={image.maticToffee} width={250} alt="" />
        <input
          placeholder="Address To"
          name="addressTo"
          type="text"
          className="form--input"
        />
        <input
          placeholder="Amount (MATIC)"
          name="amount"
          type="number"
          className="form--input"
        />
        <input
          placeholder="Keyword (Gif)"
          name="keyword"
          type="text"
          className="form--input"
        />
        <input
          placeholder="Enter Message"
          name="message"
          type="text"
          className="form--input"
        />

        <button type="button" className="form--button">
          Send now
        </button>
      </div>
      </div>
      
      </div>
    
  );
};

export default Details;
