import React from 'react';
import PropTypes from 'prop-types';

function Icecream({ favorite, picture }) { //arguments === props.favorite
  return <div>
    <h1>I love {favorite}</h1>
    <img src={picture} alt={favorite} />
  </div>
}

const products = [
  {
    id: 1,
    name: "mint choco",
    picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQA9RrlqJPvzzu9a-2c9pGBjwGKSEpbpsieWieASyBrxeDJsAxT"
  },
  {
    id: 2,
    name: "choco moose",
    picture: "https://farm3.staticflickr.com/2399/1695026684_a35c2f996c_b.jpg"
  },
  {
    id: 3,
    name: "choco",
    picture: "https://www.tasteofhome.com/wp-content/uploads/2017/10/Chocolate-Crunch-Ice-Cream_exps31814_CW950599D43C_RMS.jpg"
  },
  {
    id: 4,
    name: "cookie and cream",
    picture: "https://i0.wp.com/butterwithasideofbread.com/wp-content/uploads/2014/09/Cookies-and-Cream-Cookies-15.jpg?fit=695%2C887&ssl=1"
  }
];

products.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
}

function renderIcecream(item) {
  return <Icecream key={item.id} favorite={item.name} picture={item.picture} />
}

function App() {
  return <div>
    {products.map(renderIcecream)}
  </div>
}

export default App;
