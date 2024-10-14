import '../App.css';

export default function MyButton({ title, page, handleClick }){
    return (
        <button 
            onClick={handleClick}
            className='button'
        >
            {title}
        </button>
    );
}