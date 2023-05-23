import { Link } from "../Link";

export default function Page404() {
  return (
    <>
      <img
        src="https://www.google.com/search?q=404&client=firefox-b-d&sxsrf=APwXEdfR-b9DCmjV0n7P-a-VGjg1X2NHuA:1684876624477&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjF0MTFroz_AhWZlWoFHd3lCvwQ_AUoAXoECAEQAw&biw=1366&bih=635&dpr=1#imgrc=6enA_WME5cGu0M"
        alt="Error 404"
      />
      <h1>Page not Found</h1>

      <p>
        Oh la pagina que esta intentando buscar no se encuentra,regrese a la
        pagina anterior y verifique el enlace{" "}
      </p>
      <Link to="/">Volver a la Home</Link>
    </>
  );
}
