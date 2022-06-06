import React from "react";
import { images } from "../../constants";
import { data } from "../../constants";
import { MenuItem } from "../../components";
import "./SpecialMenu.css";

const SpecialMenu = () => (
  <div
    className="app__specialMenu app__bg section__padding flex__center"
    id="specialMenu"
  >
    <div className="app__specialMenuHeading">
      <p className="p__cormorant">Menu That Fits You Palatte</p>
      <img src={images.spoon} alt="spoon" />
      <h1 className="headtext__cormorant">Today's Special</h1>
    </div>
    <div className="app__specialMenu-content flex__center">
      <div className="app__SpecialMenu-content_menu">
        <h1 className="p__cormorant">Wine & Beer</h1>
        <div className="app__specialMenu_menu_items">
          {data.wines.map((wine, index) => (
            <MenuItem
              key={wine.title + index}
              title={wine.title}
              price={wine.price}
              tags={wine.tags}
            />
          ))}
        </div>
      </div>
      <div className="app__specialMenu-content_img">
        <img src={images.menu} alt="Menu" />
      </div>

      <div className="app__specialMenu-content_cocktail">
        <h1 className="p__cormorant">Cocktail</h1>
        <div className="app__specialMenu_menu_items">
          {data.cocktails.map((cocktail, index) => (
            <MenuItem
              key={cocktail.title + index}
              title={cocktail.title}
              price={cocktail.price}
              tags={cocktail.tags}
            />
          ))}
        </div>
      </div>
    </div>
    <div className="flex__center" style={{ marginTop: 15 }}>
      <button type="button" className="custom__button">
        View More
      </button>
    </div>
  </div>
);

export default SpecialMenu;
