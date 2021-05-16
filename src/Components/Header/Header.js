import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <div className="text-white text-lg lg:text-3xl relative flex justify-center m-5">
            
            <div className=" md:w-1/3">
                <h1>Hi. <br/> 
                My name is Pavlin.<br />
                Software Engineer / Web Developer
                </h1>
                <p className="text-sm md:text-base mt-6"> 
                    My experience is in front-end development  with React<br/>
                    and backend  development with Node.js and Flask.  
                </p>
                <div className="mt-5 grid justify-items-center">
                    <Link  
                    className="border-2 px-3 py-1 rounded-lg hover:bg-white
                     hover:text-black transition duration-300 ease-in-out">Contact Me</Link>
                </div>
            </div>
            <div className="bg-photo bg-cover bg-no-repeat h-20 w-20
             md:h-40 md:w-40 bg-top-1 rounded-full border-2 border-white"/>
                
            
        </div>
    )
}

export default Header;