import { Link } from "react-router-dom";
import logo from '../../../assets/logo.png'
const Navbar = () => {
    const user =true;
    const navoptions=<>
      <li className=""><Link to="/">Home</Link></li>
      <li className=""><Link to="/">All Classes</Link></li>
      <li className=""><Link to="/">Teach On <span className="font-serif font-semibold">The Master!</span></Link></li>  
      {
        user?<>
        <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box max-w-fit">
        <li className=" p-2 pointer-events-none">          
            {
               user?.displayName
            }
          
        </li>
        <li><Link>Dashboard</Link></li>
        <li><Link>Logout</Link></li>
      </ul>
    </div>
        </>:<li className=""><Link to="/">Sign In</Link></li>  
      }
      

    </>
    return (
        <div className="drawer">
  <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
  <div className="drawer-content flex flex-col">
    {/* Navbar */}
    <div className="w-full navbar">
      <div className="flex-none lg:hidden">
        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
      </div> 
      <div className="flex-1 px-2 mx-2">
        <img src={logo} className="w-8 mr-2" alt="logo" />
        <h2 className="font-bold text-2xl">The Master</h2></div>
      <div className="flex-none hidden lg:block">
        <ul className="menu menu-horizontal">
          {/* Navbar menu content here */}
          {
            navoptions
          }
        </ul>
      </div>
    </div>
    {/* Page content here */}
    Content
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 min-h-full bg-base-200">
      {/* Sidebar content here */}
    {
        navoptions
    }
    </ul>
  </div>
</div>
    );
};

export default Navbar;