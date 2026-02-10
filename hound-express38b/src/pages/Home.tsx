import {logoazul } from '../assets/Img/index'; 
import {
  productsStyle,
  productArticleStyle,
  productImgStyle,
  productPStyle,
} from "../styles/layout";

const Home = () => {
  return (
    <>
    
      <main style={productsStyle}>

        <p> </p>
        <article style={productArticleStyle}>
          
          <img
            src={logoazul}
            alt="Logo corporativo"
            style={productImgStyle}
            width={600}
            height={200}
          />
          <p style={productPStyle}>
            Nuestros clientes son nuestra prioridad
          </p>
        </article>
        <p> </p>
      </main>

    </>
  );
};

export default Home;
