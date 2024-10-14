import '../../App.css';

export default function NavigationButton({ title, page, handleClick }){
    return (
        <button 
            onClick={handleClick}
            className='btn btn-success btn-lg'
        >
            {title}
        </button>
    );
}