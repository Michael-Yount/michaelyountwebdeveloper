
function InfoCard() {
    return (
        <div className="card" style={{width: 500}}>
        <image src="../MYlogo.png" class="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">This is where all the Magic Happens</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>  
    );
};
export default InfoCard;