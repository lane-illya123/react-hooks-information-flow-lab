import React, {useState} from "react";


function Header({onDarkModeClick}){
   console.log(onDarkModeClick)
    const [isDarkMode, setIsDarkMode] = useState(false);

   return(
   <div>
    <header>
        <h2>Shopster</h2>
        <button onClick={onDarkModeClick}>{isDarkMode ? "Dark" : "Light"} Mode</button>
    </header>
    </div>
    );
}

export default Header;