
module.exports = (neighborhood, reviews, description, bookings) => `
  <div class='full-listing-page'>
    <div class='top-bar'><img src='../../8.png'><img src='../../9.png'></div>
    <div class='pictures' id='photo-carousel-service'><img src='../../listing_photo.jpg'></div>
    <div class='center-column'>

      <div class='details'>
        <div id='description-service'>
          <img src='../../1.png'>
          <img src='../../2.png'>
        </div>
        <div id='reviews-service'><img src='../../3.png'></div>
        <div class='host'><img src='../../4.png'></div>
        <div id='Neighborhood'><img src='../../5.png'>${neighborhood}</div>
      </div>

      <div class='booking' id='bookings-service'><img src='../../booking.png'></div>

    </div>

    <div id='listings'><img src='../../6.png'></div>
    <div class='bottom-bar'><img src='../../7.png'></div>
  </div>
`;
