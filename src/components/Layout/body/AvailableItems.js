import classes from './AvailableItems.module.css'


const productsArr = [
  {
    title: "Colors",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    title: "Black and white Colors",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  {
    title: "Yellow and Black Colors",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
    title: "Blue Color",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const AvailableItems = (props) => {
  return (
    <div>
       {productsArr.map((item) => {
          return (
            <div>
                  <div className={classes.imageContainer}>   
              <img src={item.imageUrl} alt={item.title}></img>
            </div>
            <div className={classes.prodDetails}>

            </div>
            </div>
        
          );
        })}
    </div>
  );
};

export default AvailableItems;
