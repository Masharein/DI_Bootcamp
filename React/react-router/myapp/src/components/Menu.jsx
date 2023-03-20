import { NavLink } from "react-router-dom"

const Menu = () => {
  return (
    <nav>
        <NavLink style={({ isActive }) => isActive ? {color: 'lightyellow', textDecoration:'none'} : {}} to="." end>Home</NavLink>
        <NavLink className ={({ isActive }) => isActive ? 'activeLink' : 'link'} to="courses" end>Courses</NavLink>
        <NavLink className ={({ isActive }) => isActive ? 'activeLink' : 'link'} to="about">About</NavLink>
        <NavLink className ={({ isActive }) => isActive ? 'activeLink' : 'link'} to="contacts">Contacts</NavLink>
        
        {/* three differnt ways to style */}
    </nav>
  )
}

export default Menu