import logo from '../../../../src/assets/logo.png'
const Footer = () => {
    return (
        <footer >
            <div className="footer p-10 bg-slate-800 text-white ">

  <nav>
    {/* <header className="footer-title">The Master</header>  */}
    <a className="link link-hover">The Master Bussiness</a>
    <a className="link link-hover">Tech on Th Master</a>
    <a className="link link-hover">Get the app</a>
    <a className="link link-hover">Donate use!</a>
  </nav> 
  <nav>
    {/* <header className="footer-title">The Master</header>  */}
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact us</a>
    <a className="link link-hover">Career</a>
    <a className="link link-hover">Blog</a>
  </nav> 
  <nav>
    {/* <header className="footer-title">Legal</header>  */}
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</div> 
<div className="footer footer-center p-4 text-base-content">
  <aside className="items-center grid-flow-col">
    <img src={logo} className='w-8' alt="logo" />
   
 
    <p>Copyright © 2024 - The Master Edu Ltd. <br/>A trustable Learning Platform since 2023</p>
    <p></p>
  </aside>
</div>
        </footer>
    );
};

export default Footer;