import React from 'react'
import './Main.css'
const Navbar = () => {
    let isDarkMode = false;

    const toggleMode = () =>{
        isDarkMode = !isDarkMode;
        document.body.classList.toggle('dark-mode', isDarkMode);
        document.getElementById('modeButton').innerText = isDarkMode ? 'Light' : 'Dark';
    };

    const toggleMenu = () => {
        const menu = document.getElementById('menuList');
        menu.classList.toggle('open');
    };
 
  return (
    <nav className='navbar'>
        <div className='logo'>Nithin</div>
        <div className="menu-list">
            <ul id='menuList'>
                <li><a href='#'>Home</a></li> 
                <li><a href='#'>Skills</a></li>
                <li><a href='#'>Service</a></li>
                <li><button id='modeButton' onClick={toggleMode}>Dark</button></li>
            </ul>
        </div>
            <i className='fa-solid fa-bars' onClick={toggleMenu}></i>
    </nav>
    
   
  )
}

export default Navbar
