import {Link} from "react-router-dom";
function Menu()
{
  return(
    <div>
     <Link to="/">Home</Link> |
     <Link to="/about">About</Link> |
     <Link to="/services">Services</Link> |
     <Link to="/Contact">Contact</Link> |
     <Link to ="/Student">Student</Link> |
     <Link to ="/events">Event</Link> |
     <Link to ="/Event1">Event1</Link> |
     <Link to="newproduct">Products</Link> |
     <Link to="image">Images</Link>
      </div>
  );
}
export default Menu;