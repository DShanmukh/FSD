import {Link} from "react-router-dom";
function Menu(){
  return(
   <div>
     <Link to="/Login">Login</Link> |
    <Link to='/Signup'>Signup</Link>
   </div> 
  );
}
export default Menu;