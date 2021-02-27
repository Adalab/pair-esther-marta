function CityImage(props) {
  return (
    <>
      <h2>{props.city.name}</h2>
      <img src={props.cities.imageCity} />
    </>
  );
}

export default CityImage;
