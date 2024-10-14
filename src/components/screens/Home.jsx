import MyButton from '../button';
import { 
    useNavigate,
    Router
} from 'react-router-dom';
import React from "react";

const Home = () => {
    const navigate = useNavigate();

    function handleClick() {
        navigate('/signup');
    }

    return (
        <div className="App">
          <header className="App-header">
            <p className='title'>
              Weaver
            </p>
            <MyButton title="Sign Up" page="/signup" handleClick={handleClick}/>
            <MyButton title="Log In"/>
          </header>
        </div>
    );
}

export default Home;