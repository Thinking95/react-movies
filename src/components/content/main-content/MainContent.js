import React, { useState } from 'react';
import './MainContent.scss';
import Slideshow from '../slideshow/Slideshow';
import Paginate from '../paginate/Paginate';
import Grid from '../grid/Grid';

const MainContent = () => {
  const images = [
    {
      url: 'https://goldenline.bg/wp-content/uploads/2016/12/mood-girl-sand-sea-water-wave-signs-people-sun-sunset-background-wallpaper-widescreen-fullscreen-widescreen-HD-wallpapers-background.jpg',
      rating: 7.5
    },
    {
      url: 'https://static2.makeuseofimages.com/wp-content/uploads/2017/02/Photoshop-Replace-Background-Featured.jpg',
      rating: 8.5
    },
    {
      url: 'https://static2.makeuseofimages.com/wp-content/uploads/2017/02/Photoshop-Replace-Background-Featured.jpg',
      rating: 7.8
    },
    {
      url: 'https://static2.makeuseofimages.com/wp-content/uploads/2017/02/Photoshop-Replace-Background-Featured.jpg',
      rating: 9.7
    },
    {
      url: 'https://scrubbing.in/wp-content/uploads/2018/02/pexels-photo-547557.jpeg',
      rating: 7.5
    },
    {
      url: 'https://scrubbing.in/wp-content/uploads/2018/02/pexels-photo-547557.jpeg',
      rating: 6.5
    }
  ];
  const [currentPage, setCurrentPage] = useState(1);

  const paginate = (type) => {
    if (type === 'prev' && currentPage >= 1) {
      setCurrentPage((prev) => prev - 1);
    } else {
      setCurrentPage((prev) => prev + 1);
    }
  };

  return (
    <div className="main-content">
      <Slideshow images={images} auto={true} showArrows={true} />
      <div className="grid-movie-title">
        <div className="movieType">Now Playing</div>
        <div className="paginate">
          <Paginate currentPage={currentPage} totalPages={10} paginate={paginate} />
        </div>
      </div>
      <Grid images={images} />
    </div>
  );
};

export default MainContent;
