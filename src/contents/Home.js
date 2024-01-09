import './style.css'; 
import ProductBar from "../component/ProductBar/ProductBar";

const Home = () => {
  return (
    <div className="home-content">
      <ProductBar section="camera" title="Cameras" />
      <ProductBar section="lens" title="Lens" />
      <ProductBar section="accessory" title="Accessories" />
    </div>
  )
}

export default Home; 