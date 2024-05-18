import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from './layout/MainLayout/MainLayout';
import AdminLayout from './layout/AdminLayout/AdminLayout';
import Employees from './pages/AdminPages/Employees';
import AddEmployees from './pages/AdminPages/AddEmployees';
import MainSite from "./pages/AdminPages/MainSite";
import Employee from './pages/MainPages/Employee';
import AdminPanel from './pages/MainPages/AdminPanel';
import UpdatePage from './pages/AdminPages/UpdatePage';
import BasketPage from './pages/MainPages/BasketPage';
import AboutPage from './pages/MainPages/AboutPage';
import ContactPage from './pages/MainPages/ContactPage';
import MainProvider from './context/MainProvider';
import DetailPage from './pages/MainPages/DetailPage';

function App() {
  
  return (
    <>
    <MainProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/employee" element={<Employee />} />
            <Route path="/admin" element={<AdminPanel />}/>
            <Route path="/basket" element={<BasketPage />}/>
            <Route path="/about" element={<AboutPage />}/>
            <Route path="/contact" element={<ContactPage />}/>
            <Route path="/detail/:id" element={<DetailPage />}/>

            
            



            
          </Route>
          <Route path="admin/" element={<AdminLayout />}>
            <Route path="mainsite" element={<MainSite />} />
            <Route path="add" element={<AddEmployees />} />
            <Route path="update/:id" element={<UpdatePage />} />
            <Route path="employees" element={<Employees />} />
            

          </Route>
        </Routes>
      </BrowserRouter>
      </MainProvider>
    </>
  )
}

export default App
