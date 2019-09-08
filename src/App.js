import React from 'react';

function Icecream({ favorite, picture }) { //arguments === props.favorite
  return <div>
    <h1>I love {favorite}</h1>
    <img src={picture} alt={favorite} />
  </div>
}

const products = [
  {
    name: "mint choco",
    picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQA9RrlqJPvzzu9a-2c9pGBjwGKSEpbpsieWieASyBrxeDJsAxT"
  },
  {
    name: "choco moose",
    picture: "https://farm3.staticflickr.com/2399/1695026684_a35c2f996c_b.jpg"
  },
  {
    name: "choco",
    picture: "https://www.tasteofhome.com/wp-content/uploads/2017/10/Chocolate-Crunch-Ice-Cream_exps31814_CW950599D43C_RMS.jpg"
  },
  {
    name: "cookie and cream",
    picture: "https://i0.wp.com/butterwithasideofbread.com/wp-content/uploads/2014/09/Cookies-and-Cream-Cookies-15.jpg?fit=695%2C887&ssl=1"
  }
];

function App() {
  return <div>
    {products.map(item => <Icecream favorite={item.name} picture={item.picture} />)}
  </div>
}

export default App;
