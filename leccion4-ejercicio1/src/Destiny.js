import React from "react";
import CityImage from "./CityImage.js";

function Destiny() {
  const cities = [
    {
      nameCity: "París",
      imageCity:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fviajes.nationalgeographic.com.es%2Fa%2Fguia-completa-amsterdam_15738&psig=AOvVaw1KUqIoMlwnst5qsm-7ww_J&ust=1613929418637000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLj42OGB-e4CFQAAAAAdAAAAABAJ",
    },
    {
      nameCity: "Thessalonika",
      imageCity:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.fodors.com%2Fworld%2Feurope%2Fgreece%2Fthessaloniki-and-central-macedonia%2Fexperiences%2Fnews%2Fwhenever-youre-able-to-travel-to-europe-again-put-this-greek-town-at-the-top-of-your-list&psig=AOvVaw2gUu0TJmtRDXoCXIzm17cA&ust=1613929315586000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNDvnq-B-e4CFQAAAAAdAAAAABAD",
    },
    {
      nameCity: "Londres",
      imageCity:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.londres.es%2Fdistritos&psig=AOvVaw0KiNvV6OYJ7TU1yBbCsrC4&ust=1613929344529000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMjAzbyB-e4CFQAAAAAdAAAAABAD",
    },
    {
      nameCity: "Cracovia",
      imageCity:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vanidades.com%2Fviajes%2Fbruselas-la-cuidad-de-la-artes%2F&psig=AOvVaw06M8EfxdDh0TqwJRd_vyqP&ust=1613929396904000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNChw9WB-e4CFQAAAAAdAAAAABAI",
    },
    {
      nameCity: "Brusselas",
      imageCity:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fviajes.nationalgeographic.com.es%2Fa%2Fguia-completa-amsterdam_15738&psig=AOvVaw1KUqIoMlwnst5qsm-7ww_J&ust=1613929418637000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLj42OGB-e4CFQAAAAAdAAAAABAJ",
    },
  ];

  const result = cities.map((city) => {
    <select name="select" onChange={onClickListener} onChange={imageCity}>
      <option>{city.nameCity}</option>
    </select>;
  });

  return (
    <div>
      <div>{result}</div>
      <div>
        <CityImage src={cities.imageCity} />
      </div>
    </div>
  );
}

const onClickListener = (ev) => {
  alert("Tu destino es viajar a " + ev.target.value);
};

export default Destiny;
