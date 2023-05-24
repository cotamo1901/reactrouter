import { Link } from "../Link";

export default function Page404() {
  return (
    <>
      <h1>Page not Found</h1>
      <img
        src="https://midu.dev/images/this-is-fine-404.gif "
        alt="Error 404"
      />

      <p>
        Oh la pagina que esta intentando buscar no se encuentra,regrese a la
        pagina anterior y verifique el enlace{" "}
      </p>
      <Link to="/">Volver a la Home</Link>
    </>
  );
}
