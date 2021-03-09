import React from "react";

export default function SecondComponent(props) {
  return (
    <div>
      <aside className="star-rating">
        <h5>Star rating</h5>

        <ul>
          {props.items.map((item, i) => (
            <div>
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
                checked={item.checked}
              ></input>
              <label className="form-check-label" htmlFor="flexCheckDefault">
                <li key={i}>{item.name}</li>
              </label>
            </div>
          ))}
        </ul>
      </aside>
    </div>
  );
}
