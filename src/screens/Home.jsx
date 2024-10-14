import NavigationButton from '../components/buttons/navigationButton';
import { 
    useNavigate,
} from 'react-router-dom';
import React from "react";

const Home = () => {
    const navigate = useNavigate();

    function handleClick() {
        navigate('/signup');
    }

    return (
        <div className="App">
          <div className='navigation-bar'>
            <NavigationButton title="Log In"/>
            <NavigationButton title="Sign Up" page="/signup" handleClick={handleClick}/>
          </div>
          <p className='title'>
              Weaver
          </p>

        </div>
    );
}

export default Home;