import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const SingleItem = ({ _id, name, image, banner, artist, idPath }) => {
  return (
    <Link to={`${idPath}/${_id}`} className="single-item">
      <div className="single-item__div-image-button">
        <div className="single-item__div-image">
          <img
            className="single-item__image"
            src={image}
            alt={`Image ${name} not found`}
          />
        </div>

        <FontAwesomeIcon className="single-item__icon" icon={faPlay} />
      </div>

      <div className="single-item__texts">
        <div className="single-item__2line">
          <h2 className="single-item__title"> {name} </h2>
        </div>

        <p className="single-item__type"> {artist ?? "Artist"} </p>
      </div>
    </Link>
  );
};

export default SingleItem;
