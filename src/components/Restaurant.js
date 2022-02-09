const Restaurant = ({ restaurant }) => {
  return (
    <div className="RestaurantInfos">
      <div className="RestaurantInfos--center">
        <div className="RestaurantInfos--texts">
          <h1>Le Pain Quotidien - Montorgueil</h1>
          <p>
            Profitez de chaque plaisir de la vie quotidienne. Le Pain Quotidien
            propose des ingrédients simples et sains, du bon pain, des fruits et
            des légumes frais et de saison issus de l’agriculture biologique.
          </p>
        </div>
        <img
          className="RestaurantInfos--cover"
          src="https://f.roocdn.com/images/menus/17697/header-image.jpg"
          alt="restaurant cover"
        />
      </div>
    </div>
  );
};

export default Restaurant;
