import React from 'react';
import Button from '@material-ui/core/Button';
import './SearchPage.css';
import SearchResult from './SearchResult';

function SearchPage() {
    return (
        <div className='searchPage'>
            <div className="searchPage__info">
                <p>62 stays • 26 august to 30 august • 2 guest</p>
                <h1>Stays nearby</h1>
                <Button variant='outlined'>
                    Cancellation Flexibility
                </Button>
                <Button variant='outlined'>
                   Type of place
                </Button>
                <Button variant='outlined'>
                   Price
                </Button>
                <Button variant='outlined'>
                   Rooms and beds
                </Button>
                <Button variant='outlined'>
                    More filters
                </Button>
            </div>
            <SearchResult img='https://a0.muscache.com/im/pictures/d591f72d-083b-40bc-acdd-72c582be8ecb.jpg'
                          location='Private room in center of London'
                          title='Stay at this spacious Edwardian House'
                          description='1 guest • 1 bedrom • 1 bed • 1.5 shared bthrooms • Wifi • Kitchen • Free parking • Waching Mashine'
                          star={4.75}
                          price='$30 / night'
                          total='$117 total'/>
                            <SearchResult img='https://a0.muscache.com/im/pictures/87a9fb2a-eb41-46f5-be6f-09c063e0607d.jpg'
                          location='Private room in center of London'
                          title='Stay at this spacious Edwardian House'
                          description='1 guest • 1 bedrom • 1 bed • 1.5 shared bthrooms • Wifi • Kitchen • Free parking • Waching Mashine'
                          star={4.75}
                          price='$30 / night'
                          total='$117 total'/>
                            <SearchResult img='https://a0.muscache.com/im/pictures/dacde157-9f09-4ebd-9a2a-0724d799ddf8.jpg'
                          location='Private room in center of London'
                          title='Stay at this spacious Edwardian House'
                          description='1 guest • 1 bedrom • 1 bed • 1.5 shared bthrooms • Wifi • Kitchen • Free parking • Waching Mashine'
                          star={4.75}
                          price='$30 / night'
                          total='$117 total'/>
                            <SearchResult img='https://a0.muscache.com/im/pictures/ad643d88-2c3d-4c65-bba8-0f8eabed6976.jpg'
                          location='Private room in center of London'
                          title='Stay at this spacious Edwardian House'
                          description='1 guest • 1 bedrom • 1 bed • 1.5 shared bthrooms • Wifi • Kitchen • Free parking • Waching Mashine'
                          star={4.75}
                          price='$30 / night'
                          total='$117 total'/>
                            <SearchResult img='https://a0.muscache.com/im/pictures/3732fef3-e021-47e2-a65e-211d960c1ca6.jpg'
                          location='Private room in center of London'
                          title='Stay at this spacious Edwardian House'
                          description='1 guest • 1 bedrom • 1 bed • 1.5 shared bthrooms • Wifi • Kitchen • Free parking • Waching Mashine'
                          star={4.75}
                          price='$30 / night'
                          total='$117 total'/>
                            <SearchResult img='https://a0.muscache.com/im/pictures/7cc08c7f-d501-4f12-93bb-942ad674007d.jpg'
                          location='Private room in center of London'
                          title='Stay at this spacious Edwardian House'
                          description='1 guest • 1 bedrom • 1 bed • 1.5 shared bthrooms • Wifi • Kitchen • Free parking • Waching Mashine'
                          star={4.75}
                          price='$30 / night'
                          total='$117 total'/>
                            <SearchResult img='https://a0.muscache.com/im/pictures/51ed0ee0-a2b1-4939-9a2a-57527937144b.jpg'
                          location='Private room in center of London'
                          title='Stay at this spacious Edwardian House'
                          description='1 guest • 1 bedrom • 1 bed • 1.5 shared bthrooms • Wifi • Kitchen • Free parking • Waching Mashine'
                          star={4.75}
                          price='$30 / night'
                          total='$117 total'/>
                          
        </div>
    )
}

export default SearchPage
