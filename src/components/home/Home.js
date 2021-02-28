import React from 'react';
import Banner from '../header/Banner';
import Card from './Card';
import './Home.css';

function Home() {
  return (
    <div className="home">
    
      <Banner />
      <div className="home__section">
        <Card src="https://a0.muscache.com/im/pictures/a0316ecb-e49b-4b3a-b6b6-c2876b820e8c.jpg" title="Entire homes" description="Comfortable private places with room for friend or family" price='$120/night' />
        <Card src="https://a0.muscache.com/im/pictures/ff69ac49-64e7-4f4a-ae2b-ee01163d0790.jpg" title="Entire homes" description="Comfortable private places with room for friend or family" price='$120/night' />
        <Card src="https://a0.muscache.com/im/pictures/ce6814ba-ed53-4d6e-b8f8-c0bbcf821011.jpg" title="Entire homes" description="Comfortable private places with room for friend or family" price='$120/night' />
      </div>
      <div className="home__section">
        <Card src="https://a0.muscache.com/im/pictures/fbe849a4-841a-41b3-b770-419402a6316f.jpg" title="Entire homes" description="Comfortable private places with room for friend or family" price='$120/night' />
        <Card src="https://a0.muscache.com/im/pictures/2a16f833-464c-446c-8d74-33eb8c643975.jpg" title="Entire homes" description="Comfortable private places with room for friend or family" price='$120/night' />
        <Card src="https://a0.muscache.com/im/pictures/a84e92bd-68e6-4ce2-9fdf-b2ce1a377f53.jpg" title="Entire homes" description="Comfortable private places with room for friend or family" price='$120/night' />
      </div>
    </div>
  );
}

export default Home;
