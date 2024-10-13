import { useRoutes } from "react-router-dom";
import Home from "../pages/home/index.tsx";
import About from "../pages/about.tsx/index.tsx";
import NotFound from "../pages/notFound/index.tsx";
import AboutItem from "../pages/about.tsx/AboutItem.tsx";
import SignIn from "../pages/SingIn/SingIn.tsx";
import SignUp from "../pages/SingUp/SingUp.tsx";
import RequireAuth from "../components/RequireAuth";

const routes = [
  { path: "/", element: <SignUp /> },
  { path: "/login", element: <SignIn /> },
  { path: "/home", element: <Home />, protected: true },
  { path: "/sobre", element: <About />, protected: true },
  { path: "/sobre/:slug", element: <AboutItem />, protected: true },
  { path: "*", element: <NotFound /> },
];

const MainRouter = () => {
  const elements = routes.map((route) => {
    if (route.protected) {
      return { ...route, element: <RequireAuth>{route.element}</RequireAuth> };
    }
    return route;
  });

  return useRoutes(elements);
};

//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/sobre" element={<About />} />
//       <Route path="/sobre/:slug" element={<AboutItem />} />
//       <Route path="*" element={<NotFound />} />
//     </Routes>
//   );

export default MainRouter;
