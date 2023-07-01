import React from 'react'
import { useContext } from 'react'
import { ContextGlobal } from '../Components/utils/global.context'
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context



const Navbar = () => {

  const {newData} = useContext(ContextGlobal)

  const {changeTheme, theme} = newData;

  const handdleClick = () => {changeTheme();}









  return (
    <nav>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      <ul>
        <li><a href="/home">Home</a></li>
        <li><a href="/favs">Favorites</a></li>
        <li><a href="/contact">Contacts</a></li>
      </ul>

      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button onClick={handdleClick}>Change theme</button>
    </nav>
  )
}

export default Navbar