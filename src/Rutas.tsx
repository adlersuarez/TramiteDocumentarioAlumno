import { Navigate, createBrowserRouter } from 'react-router-dom';
import NotFound from './view/pages/404/NotFound';
import FormularioEntrada from './view/formulario/FormularioEntrada';
import VistaPrincipal from './view/formulario/VistaPrincipal';

const router = createBrowserRouter([
  {
    path: '/rutaPrincipal',
    element: <Navigate to="rutaHijo" replace />
  },
  {
    path: '/rutaPrincipal/*',
    //element: <ComponentePadre />,
    children: [
      {
        path: 'rutaHijo',
        //element: <ComponenteHijo />
      },
    ]
  },
  {
    path: 'formulario',
    element: <FormularioEntrada />
  },
  {
    path: 'principal',
    element: <VistaPrincipal />
  },
  {
    path: '*',
    element: <NotFound />
  },
  {
    path: '/',
    element: <Navigate to="formulario" replace />,
  },
])

export default router;