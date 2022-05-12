//images
import PngImage from '../assets/PngImage.png'

const Home = (props) => {

    return (
        <div style={{ position: "fixed", top: '80px', left: "90px" }} >
            <h3> join in with us! </h3>
            <div style={{ position: "fixed", top: '160px', right: "200px", maxWidth: "700px" }} >
                <img className="img-fluid width: 50% \9" src={PngImage} alt="loginImage" />
            </div>
        </div>
    )
}

export default Home