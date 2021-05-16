import { Link } from 'react-router-dom';

const Nav = () => {

    return(
        <div className="text-white text-md md:text-2xl pt-4 flex justify-center" >
            <Link className="mx-3" >Portfolio</Link>
            <Link className="mx-3" >Skills</Link>
            <Link className="mx-3" >About</Link>
            <Link className="mx-3" >Contact</Link>
            
        </div>
    )
}

export default Nav;