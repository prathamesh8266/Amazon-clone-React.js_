import React from "react";
import Product from "../Product/Product";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <img
        src="http://www.paisebachaoindia.com/wp-content/uploads/2016/01/banner.png"
        className="home_image"
      />
      <div className="home__container">
        <div className="home__row">
          <Product
            id={1111}
            title="Lean Startup: A One Step At A Time Entrepreneur's Mindset Guide to Building and Continuously Scaling Up Your Small Business"
            price={23.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
            rating={5}
          />
          <Product
            id={1112}
            title="Usha Trienergy Plus 800 Watt Mixer Grinder with Copper Motor"
            price={99.99}
            image="https://azcd.harveynorman.com.au/media/catalog/product/cache/21/image/992x558/9df78eab33525d08d6e5fb8d27136e95/p/b/pbt2000wh-sunbeam-ice-breaker-blender.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id={2221}
            title="Iphone 8 Space Grey (JIO Supported) 1 Year Warranty"
            price={300}
            image="https://drop.ndtv.com/TECH/product_database/images/913201715733AM_635_iphone_8.jpeg"
            rating={3}
          />
          <Product
            id={2222}
            title="Dell G3 3500 Gaming Laptop with 15.6 Inch (39.62 cms)"
            price={999.99}
            image="https://i.gadgets360cdn.com/products/large/Dell-G3-15-DB-800x800-1595500795.jpg"
            rating={4}
          />
          <Product
            id={2223}
            title="Milton Thermosteel Duo Deluxe 1000 Bottle Style Vacuum Flask, 1 Litre, Silver"
            price={20}
            image="https://m.media-amazon.com/images/I/71qNjLUiZuL._SL1500_.jpg"
            rating={2}
          />
        </div>

        <div className="home__row">
          <Product
            id={3331}
            title=" Samsung Odyssey Ultra Wide Curved Monitor (Black)144 Hz, 1ms, Bezel Less, Flat, Full HD, FreeSync Premium Gaming Monitor (LF24G35TFWWXXL, Black)"
            price={1299.99}
            image="https://azcd.harveynorman.com.au/media/catalog/product/l/c/lc49g95tssexxy-samsung-49-inch-odyssey-g7-curved-gaming-monitor.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
