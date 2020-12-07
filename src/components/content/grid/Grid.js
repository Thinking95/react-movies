/* eslint-disable react/prop-types */
import React from 'react';
import './Grid.scss';
import Rating from '../rating/Rating';

const Grid = (props) => {
  const { images } = props;
  return (
    <>
      <div className="grid">
        {
          images.map((images, i) =>
          <div key={i}>
            <div className="grid-cell"
              style={{ backgroundImage: `url(${images.url})` }}
            >
            <div className="grid-read-more">
              <button className="grid-cell-button">
                Read More
              </button>
            </div>
            <div className="grid-detail">
              <span className="grid-detail-title">Mission Impossible</span>
              <div className="grid-detail-rating">
                <Rating rating={images.rating} totalStars={10}/>
                &nbsp;&nbsp;
                <div className="grid-vote-average">{images.rating}</div>
              </div>
            </div>
          </div>
        </div>
        )
        }
      </div>
    </>
  );
};

export default Grid;
