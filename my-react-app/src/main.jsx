import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import './index.css'; // Import Tailwind CSS here
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout.jsx';
import Home from './components/Home/Home.jsx';
import Homebottom from './components/Homebottom/Homebottom.jsx';
import Loan from './Loan/Loan.jsx';
import Calculator from './Calculator/Calculator.jsx';

import Works from './components/Works/Works.jsx';
import Instance from './components/InstanceLoan/Instance.jsx';
import Vehicle from './components/Vehicle/Vehicle.jsx';
import DcLoan from './components/DcLoan/DcLoan.jsx';
import MarriageLoan from './components/MarriageLoan/MarriageLoan.jsx';
import CcrLoan from './components/CcrLoan/CcrLoan.jsx';
import CoperateLoan from './components/CoperateLoan/CoperateLoan.jsx';
import MsmeLoan from './components/MsmeLoan/MsmeLoan.jsx';
import HousingLoan from './components/HousingLoan/HousingLoan.jsx';
import BuisnessLoan from './components/BuisnessLoan/BuisnessLoan.jsx';
import EducationLoan from './components/EducationLoan/EducationLoan.jsx';
import Privacy from './components/Privacy/Privacy.jsx';
import Terms from './components/Terms/Terms.jsx';
import AboutUs from './components/AboutUs/AboutUs.jsx';


const router= createBrowserRouter ([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        path:"",
        element: (
          <>
            <Home />
            <Homebottom />
            
          </>
        ),
      },
      {
        path:"Loan",
        element:<Loan name="Personal"/>
      },
      {
        path:"calculator",
        element:<Calculator/>
      },
      
      {
        path:"works",
        element:<Works/>
      },
      {
        path:"instance",
        element:<Instance name="Instant Personal"/>
      },
      {
        path:"Vehicle",
        element:<Vehicle name="Vehicle" />
      },
      {
        path:"dcloan",
        element:<DcLoan name="Dept Consolidation"/>
      },
      {
        path:"marriageloan",
        element:<MarriageLoan name="Marriage"/>
      },
      {
        path:"ccrloan",
        element:<CcrLoan name="Credit Card Repayment"/>
      },
      {
        path:"corporateloan",
        element:<CoperateLoan name="Corporate"/>
      },
      {
        path:"msmeloan",
        element:<MsmeLoan name="Msme"/>
      },
      {
        path:"housingloan",
        element:<HousingLoan name="Housing"/>
      },
      {
        path:"buisnessloan",
        element:<BuisnessLoan name="Buisness"/>
      },
      {
        path:"educationloan",
        element:<EducationLoan name="Education"/>
      },
      {
        path:"privacy",
        element:<Privacy/>
      },
      {
        path:"terms",
        element:<Terms/>
      },
      {
        path:"aboutus",
        element:<AboutUs/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
   <RouterProvider router={router}/>
  </StrictMode>,
)
