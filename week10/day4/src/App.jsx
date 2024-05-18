
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from './layout/MainLayout'
import Basket from './pages/Basket'
import HomePage from './pages/HomePage'
import MainProvider from './context/MainProvider';
import WishlistProvider from './context/WishlistProvider';
import Wishlist from './pages/WishList';
import CoreProvider from './context/CoreProvider';
import AddForm from './pages/AddForm';

function App() {

  return (
    <>
      
     <CoreProvider>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="basket" element={<Basket />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="add" element={<AddForm />} />


        </Route>
      </Routes>
    </BrowserRouter>
    </CoreProvider>
    </>
  )
}

export default App
