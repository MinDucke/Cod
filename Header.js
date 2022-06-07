import './Menu.css';

function Header({title, onBack}) {
    return (  
        <header className='header'>
            <button className='back-btn' onClick={onBack}>
            <i class="fa-solid fa-angles-left"></i>
            </button>
            <h4 className='header-title'>{title}</h4>

        </header>
    );
}

export default Header;