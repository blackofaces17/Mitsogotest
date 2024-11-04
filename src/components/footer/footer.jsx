import "./footer.css"
const Footer = () => {
    return ( <div className="footer-parent">
        <div className="footer-root">
            <h1>Sign up and try Hexnode free for 14 days!</h1>
            <div className="footer-textbtn-cotrol">
            <input
              type="text"
              className="intro-text"
              placeholder="Your Work Email"
            />
                <button className="header-trial-button">GET STARTED</button>
            </div>
            <div className="footer-link-control"><p>No credit cards required</p><a href="https://www.hexnode.com/mobile-device-management/request-demo/" className="footer-request-link">Request a Demo</a></div>
        </div>
    </div> );
}
 
export default Footer;