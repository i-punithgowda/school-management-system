import FooterLogo from '../../images/slideImages/logo.png'
const Footer = () => {
    return (
        <div className="footerMain">
<div className="footer">
    <div className="footerLogo">
        <img src={FooterLogo} alt="" />
    </div>
    <div className="location ">
        <span>Location:</span> <br />
        XYZ Location,  <br /> Bengaluru, Karnataka 560050
    
    </div>
    <div className="contact">
        <span>Telephone:</span> <br/>
        +91 90XXXXXXXXXX
         
    </div>
    <div className="email">
      <span>  Email: <br /> </span>
       XYZSchool@edu.in
    </div>

   
</div>
 <div className="copyright">
    © 2021 XYZ School
    <br /> All rights reserved
    <br />
    <br />
    </div>

    </div>
      );
}
 
export default Footer;