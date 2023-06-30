import react from "react"
import ReorderIcon from '@mui/icons-material/Reorder';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';
import "./css/header.css"
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import { getAuth, signOut } from "firebase/auth";
const Header = ()=>{
    const user = useSelector(selectUser)
    const auth = getAuth();
    // const handleSignOut = () => {
    //     signOut(auth).then(() => {
    //         alert("Sign out")
    //       }).catch((error) => {
    //         console.log(error);
    //       });
    // }
    
    return (
        <div className="header">
            <div className="header__left">
                <IconButton>
                    <ReorderIcon></ReorderIcon>
                </IconButton>
                <img src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png" alt="Logo"/>
            </div>

            <div className="header__middle">
                <div className="search_mail">
                <IconButton>
                    <SearchIcon></SearchIcon>
                </IconButton>
                <input type="text" placeholder="Search mail"/>
                <IconButton>
                    <ExpandMoreIcon></ExpandMoreIcon>
                </IconButton>
                </div>
            </div>

            <div className="header__right">
            <IconButton>
                    <HelpOutlineIcon></HelpOutlineIcon>
                </IconButton>

                <IconButton>
                    <SettingsIcon></SettingsIcon>
                </IconButton>

                <IconButton>
                    <AppsIcon></AppsIcon>
                </IconButton>

                <Avatar src={user?.photoURL} 
                // onClick={handleSignOut}
                ></Avatar>
            </div>
        </div>
    )
       
    
}

export default Header