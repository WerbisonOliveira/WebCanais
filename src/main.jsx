import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

//Componentes
import App from './App.jsx';
import Home from './routes/Home.jsx';
import Channels from './routes/Channels.jsx';
import Channel from './routes/Channel.jsx';
import Search from './routes/Search.jsx';
import ChannelCategorie from './routes/ChannelCategorie.jsx';
import ChannelEvent from './routes/ChannelEvent.jsx';

//react-router
import { createBrowserRouter, RouterProvider} from 'react-router-dom';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/channels",
        element: <Channels/>
      },
      {
        path: "/channel/:id",
        element: <Channel/>
      },
      {
        path: "/event/:id",
        element: <ChannelEvent/>
      },
      {
        path: "/channels/:categorie",
        element: <ChannelCategorie/>
      },
      {
        path: "/search",
        element: <Search/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
