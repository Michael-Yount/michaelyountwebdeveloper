import InfoCard from "../components/InfoCard";

 function Home() {
    console.log('home');
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <InfoCard/>
                </div>
                <div className="col">
                    <InfoCard/>
                </div>
                <div className="col">
                    <InfoCard/>
                </div>
            </div>
        </div>
    )
 }
 export default Home;