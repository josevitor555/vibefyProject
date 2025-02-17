import React from "react";
import Single from "./SingleItem";
import { Link, useLocation } from "react-router-dom";

const ItemList = ({ title, items, itemsArray, path, idPath }) => {

  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const finalItems = isHome ? items : Infinity;

  return (
    <div className="item-list">
      <div className="item-list__header">
        <h2 className="text-2xl"> Best {title} From 2024 </h2>

        {isHome ? (
          <Link to={path} className="item-list__link hover:underline">
            Show All Content
          </Link>
        ) : (
          <></>
        )}
      </div>
      <div className="item-list__container">
        {itemsArray
            .filter((currentValue, index) => index < finalItems)
            .map((currentObject, index) => (
                <Single
                    // id={currentObject.id}
                    // name={currentObject.name}
                    // image={currentObject.image}
                    // banner={currentObject.banner}
                    {...currentObject}
                    idPath={idPath}
                    key={`${title}-${index}`}/>
            ))
        }
      </div>
    </div>
  );
};

export default ItemList;
