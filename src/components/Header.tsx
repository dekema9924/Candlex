import { Link } from "react-router-dom"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';


function Header() {
    return (
        <>
            <div className="border-2">
                <div>
                    <ul>
                        <Link to={'/shop'}>Shop</Link>
                        <Link to={'/about'}>About</Link>
                        <Link to={'/blog'}>Blog</Link>
                        <Link to={'/testimonial'}>Testimonial</Link>
                    </ul>
                </div>
                <div>
                    <p>Candlex</p>
                    <div>
                        <SearchOutlinedIcon/>
                        <PermIdentityOutlinedIcon/>
                        <LocalMallOutlinedIcon/>
                        <button>Log In</button>
                    </div>
                </div>

            </div> 
        </>
    )
}

export default Header