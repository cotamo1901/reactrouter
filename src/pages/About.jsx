import { Link } from "../Link.jsx";

export default function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <p>Hola me llamo John</p>

      <Link to={'/contact'}>CONTACT</Link>
    </>
  );
}
