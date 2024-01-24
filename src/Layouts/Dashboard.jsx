import { FaChalkboardTeacher, FaHome, FaUsers } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import { SiGoogleclassroom } from "react-icons/si";
import { CgProfile } from "react-icons/cg";
const Dashboard = () => {
    return (
        <>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" defaultChecked={true} />
                <div className="drawer-content flex flex-col">
                    {/* Navbar */}
                    <div className="w-full">
                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>
                    </div>
                    {/* Page content here */}
                    <div className="m-10">
                    <Outlet></Outlet>
                    </div>
                </div>
                <div className="drawer-side lg:visible">
                    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-200">
                        {/* Sidebar content here */}
                        <>
                            <li>
                                {/* <NavLink to="/dashboard"> */}
                                <h2 className="text-4xl ">Dashboard</h2>
                                {/* </NavLink> */}
                            </li>
                            <li>
                                <NavLink to="/dashboard/teacherreq">
                                    <FaChalkboardTeacher></FaChalkboardTeacher>
                                    Teacher Request</NavLink>
                            </li>
                            <li><NavLink to="/dashboard/users">
                                <FaUsers></FaUsers>
                                All Users</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/adminallclasses"> <SiGoogleclassroom />All Classes</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/myprofile">
                                    <CgProfile />My Profile
                                </NavLink>
                            </li>
                            <div className="divider"></div>
                            {/* shared nav links */}
                            <li>
                                <NavLink to='/'>
                                    <FaHome></FaHome>
                                    Home
                                </NavLink>
                            </li>
                        </>
                    </ul>
                </div>
            </div>

        </>
    );
};

export default Dashboard;