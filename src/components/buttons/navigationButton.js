import '../../styles/App.css';

export default function NavigationButton({ title, page, handleClick }){
    return (
        <button 
            onClick={handleClick}
            className='btn btn-lg btn-link'
        >
            {title}
        </button>
    );
}