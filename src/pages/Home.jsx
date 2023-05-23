import { Link } from "../Link.jsx";

export default function HomePage() {
  return (
    <>
      <h1>Home</h1>
      <img
        src="https://e7.pngegg.com/pngimages/459/974/png-clipart-flag-ulke-bayraklar%C4%B1-daktent-world-history-bilim-a%C2%A7ocuk-flag-world.png"
        alt=""
      />
      <p>
        Esta es una pagina de ejemplo para crear un reactr Router desde cero
      </p>
      <Link to='/about'>ABOUT</Link>
    </>
  );
}
