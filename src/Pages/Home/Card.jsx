const Card = ({ card }) => {
   const { title, img, description, color } = card;
   return (
      <div>
         <div className="card w-96 bg-base-100 shadow-xl random-clr " style={{ color: `${color}` }}>
            <figure>
               <img src={img} alt="Shoes" />
            </figure>
            <div className="card-body">
               <h2 className="card-title">{title}</h2>
               <p>{description}</p>
               <div className="card-actions justify-end">{/* <button className="btn btn-primary"></button> */}</div>
            </div>
         </div>
      </div>
   );
};

export default Card;
