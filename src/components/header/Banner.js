import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Banner.css';
import Button from '@material-ui/core/Button';
import Search from './Search';

function Banner() {
  const history = useHistory();
  const [showSearch, setShowsearch] = useState(false);

  return (
    <div className="banner">
      <div className="banner__search">
        {showSearch && <Search />}
        <Button
          className="banner__searchButton"
          variant="outlined"
          onClick={() => setShowsearch(!showSearch)}>
          Search Dates
        </Button>
      </div>
      <div className="banner__info">
        <h1>Get out and stretch your imagination</h1>
        <h5>Plan a different kind of getway to uncover the hidden gems near you.</h5>
        <Button variant="outlined" onClick={() => history.push('/search')}>Explore Nearblyz</Button>
      </div>
    </div>
  );
}

export default Banner;
