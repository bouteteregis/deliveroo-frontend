const Category = ({ category }) => {
  return (
    <div className="MenuItems">
      <h2>{category.name}</h2>
      {/* List de produits */}
      <div className="MenuItems--items">
        {category.meals.map((meal, index) => {
          return (
            <div
              onClick={() => {
                console.log("J'ai cliqué sur le produit ====> ", meal);
              }}
            >
              <div className="MenuItem">
                <div className="MenuItem--card">
                  <div className="MenuItem--texts">
                    <h3>{meal.title}</h3>
                    <p>{meal.description.slice(0, 50)}...</p>

                    <div className="MenuItem--infos">
                      <span className="MenuItem--price">{meal.price} €</span>
                      {meal.popular && <span>★ Populaire</span>}
                    </div>
                  </div>
                  {meal.picture && (
                    <div className="MenuItem--picture">
                      <img style={{ height: 100 }} src={meal.picture} alt="" />
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
