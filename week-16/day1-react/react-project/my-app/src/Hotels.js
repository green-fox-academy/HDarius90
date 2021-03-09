import React from 'react';


export default function Hotels(props) {
    return (
      <div>
        <aside className="hotels">
         
          <ul>
            {props.items.map((item, i) => (
              <div className="hotelsname">
                 <h4>{item.name}</h4>
                 <img src={item.imageURL} alt=""/>
                 
                 <h5>{item.description}</h5>
               
              </div>
            ))}
          </ul>
        </aside>
      </div>
    );
  }