import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import AboutMeContainer from './components/UI/AboutMeContainer';
import PortfolioContainer from './components/UI/PortfolioContainer';
import ContactMeContainer from './components/UI/ContactMeContainer';
import ResumeContainer from './components/UI/ResumeContainer' ;

const router = createBrowserRouter([
    {
      path: "#",
      element: <App />,
      children: [
       {
          path: '#aboutme',
          element: <AboutMeContainer/>
        }, {
          path: '#portfolio',
          element: <PortfolioContainer />
        }, {
          path: '#contact',
          element: <ContactMeContainer />
        },
        {
          path: '#resume',
          element: <ResumeContainer />
        }
      ]
    },
  ]);

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router}/>);
