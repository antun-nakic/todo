import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import JosJednaKomponenta from "../components/JosJednaKomponenta";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/nasaKomponenta",
    element: <JosJednaKomponenta />,
  },
]);

export default router;
