import React,{useState} from "react";

function ListingCard({item,onDeleteClick}) {

  const [buttonClicked,setButtonClicked] = useState(false)
  


  return (
    <li className="card"> 
        <div className="card">
          <span className="price">$0</span>
          <img src={item.image} alt={"descrpition"}/>
        </div>
        <div className="details">
          {buttonClicked ? (
            <button onClick={(e) => setButtonClicked(false)} className="emoji-button favorite active">★</button>
          ) : (
            <button onClick={(e) => setButtonClicked(true)} className="emoji-button favorite">☆</button>
          )}
          <strong>{item.description}</strong>
          <span> · {item.location} </span>
          <button className="emoji-button delete"onClick={() => onDeleteClick(item)}>🗑</button>
        </div>
       </li>
  );
}

export default ListingCard;
