import React from "react";
const Card = ({ title, description, metricValue,color }) => {
     const myStyle = {
          color: 'white',
          backgroundColor: color,
          fontSize: '20px',
          width:'250px',
          padding:'19px',
          margin:'5px',
          borderRadius:'10px',
          textAlign:'center'
        };
  return (
    <div className="card" style={myStyle}>
      <h2 className="card-title">{title}</h2>
      <p className="card-description">{description} : {metricValue}
      </p>
    </div>
  );
};

export default Card;
