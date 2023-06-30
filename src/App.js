import { useEffect } from "react";
import Compose from "./Compose";
import Emailist from "./Emaillist";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Emaildetail from "./Emaildetail";
import { useDispatch, useSelector } from 'react-redux';
import { selectSendMessageIsOpen } from './features/mailSlice';
import { selectUser, signin, signout} from './features/userSlice';
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import { auth } from './firebase';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Footer from "./Footer"

function App() {
  const isMessageOpen = useSelector(selectSendMessageIsOpen);
  const user = useSelector(selectUser)
  const dispatch= useDispatch();
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(signin({
          displayName:user.displayName,
          photoURL:user.photoURL,
          email:user.email
        }))
      } else {
        dispatch(signout())
      }
    });
    return () => {
      unsubscribe();
    };
  },[])
  
  return (
    <>
    {
      user && (
        <div>
        <Header />
        <div className="app__body">
        <Sidebar />
        <Routes>
        <Route path="/" element={<Emailist />} />
        <Route path="/mail" element={<Emaildetail />} />
        </Routes>
        </div>
       { isMessageOpen && <Compose />}
       <Footer />
       </div>
      )} 
       { !user && (
        <Login />
      )
    }
   
    </>
  );
}

export default App;
