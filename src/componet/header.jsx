import { NavLink } from "react-router-dom"

const Header = () => {
    return <>
    <div className="
    flex justify-between px-9 py-3 font-serif  bg-white w-full  ">
        <h1 className="text-5xl font-bold"> 
       <NavLink  to="/">  <i class="fa-solid fa-house text-purple-600"></i> 
         Le Wagon</NavLink></h1>
        <ul className="flex ">
            <li className="hover:text-purple-600 hover:bg-gray-300 p-4">
                Courses <i class="fa-solid fa-chevron-down"></i>  </li>
            <li  className="hover:text-purple-600 hover:bg-gray-300 p-4">Locations  <i class="fa-solid fa-chevron-down"></i> </li>
           <li  className="hover:text-purple-600 hover:bg-gray-300
            p-4">Why Le Wagon <i class="fa-solid fa-chevron-down"></i>  </li>
          <NavLink to="/event"> <li  className="hover:text-purple-600 hover:bg-gray-300
           p-4">Events</li></NavLink>
            <li  className="hover:text-purple-600 hover:bg-gray-300 p-4">EnterPrise</li>
        </ul>
        <button className="bg-purple-600 px-5 p-3 rounded-2xl text-white">Apply</button>
    </div>
   





    </>
}
export default Header