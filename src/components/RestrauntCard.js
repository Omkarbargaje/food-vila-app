const RestrauntCard = ({ name, rating, image, costText, cuisine }) => (
    
    <div className="restrauntCard">
      <img className="restraunt-img" src={image?.url} alt="restraunt-photo" />
      <div className="first-line">
        <h2 className="restraunt-name">{name}</h2>
        <h3 className="rating">{rating?.aggregate_rating} star</h3>
      </div>
      <div className="secondLine">
        <h3 className="foodType">
          {
          cuisine.map((eachcuisine,i)=>{   
           return <span key={i} >{eachcuisine.name}{eachcuisine.name?",":" "}</span> ; 
          })
          }
  
          {/* Street Food, Maharashtrian, Pizza, North Indian, Shake */}
        </h3>
        <h3 className="price">{costText?.text}</h3>
      </div>
    </div>
  );

  export default RestrauntCard;