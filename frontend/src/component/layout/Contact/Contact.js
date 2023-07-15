import React, {useState, useEffect} from "react";
import "./Contact.css";
import contact from "../../../images/contact.jpg";
const Contact = () => {
  const formInitialDetails = {
    name: "",
    email:"",
    phone: "",
    subject: "",
    message: ""
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e) =>{
    e.preventDefault();
    setButtonText("Sending...");
    let response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type":"application/json;charset=utf-8"
      },
      body: JSON.stringify(formDetails)
    });
    let result =await response.json();
    setFormDetails(formInitialDetails);
    if(result.code == 200){
      setStatus({success:true, message:"Message sent succesfully"});
    }else{
      setStatus({success:false, message:"Something went wrong, please try again ! "})
    }
    setButtonText("Send");
  };

  useEffect(() => {
    let timeoutId;
    if (status.message) {
      timeoutId = setTimeout(() => {
        setStatus({});
      }, 5000);
    }
    return () => {
      clearTimeout(timeoutId);
    };
  }, [status]);
  return (

    <>
    <div className="container-fluid m-0 p-0 contact-us-main-container">
    <div className="contact-header-image">
     <h1 className="contact-us-main-heading">CONTACT US</h1>
     <img src={contact} alt="contact-image"/>
    </div>
    <div className="contact-top">
      <div className="cotact-top-phone">
        <p><i class="fa-solid fa-phone fa-2x"></i></p>
        <p>+1 (716) 486-4320</p>
      </div>
      <div className="cotact-top-mail">
        <p><i class="fa-solid fa-envelope fa-2x"></i></p>
        <p>raadigitizing@gmail.com</p>
      </div>
      <div className="cotact-top-address">
      <p><i class="fa-sharp fa-solid fa-location-dot fa-2x"></i></p>
        <p>27 SOBIESKI STREET Buffalo NY , 14212 US</p>
      </div>
    </div>
    <div className="get-in-touch container-fluid">
     <div className="find-us p-4">
      <h1>FIND US</h1>
      <p>We value your feedback, suggestions, and inquiries. If you have any questions or need assistance, please don't hesitate to reach out to us. Our dedicated support team is here to help. We are committed to providing exceptional customer support. Connect with us on social media platforms such as Twitter, Facebook, or Instagram. we are committed to providing exceptional customer support.</p>
      <div className="find-us-icons">
        <a target="_blank" href="https://www.facebook.com/raadigitizing/"><i class="fa-brands fa-facebook fa-2x" ></i></a>
        <a target="_blank" href="https://www.linkedin.com/in/raa-digitizing-85270721a/"><i class="fa-brands fa-linkedin fa-2x"></i></a>
        <a target="_blank" href="https://www.instagram.com/raadigitizing/"><i class="fa-brands fa-instagram fa-2x"></i></a>
        <a target="_blank" href="https://twitter.com/RaaDigitizing"><i class="fa-brands fa-square-twitter fa-2x"></i></a>
        </div>
     </div>
     <div className="contact-us-form">
     <div className="form-container-headings">
      <h1>Get in Touch</h1>
      <p>We're here to help if you have any questions</p>
     </div>
     <form onSubmit={handleSubmit}>
     <input
            className="form-control-lg w-100"
            type="text"
            required
            value={formDetails.name}
            placeholder="Your Name"
            onChange={(e) => onFormUpdate("name", e.target.value)}
          /> 
      <input
            className="form-control-lg w-100"
            type="email"
            required
            value={formDetails.email}
            placeholder="Your Email Address"
            onChange={(e) => onFormUpdate("email", e.target.value)}
          />
      <input
            className="form-control-lg w-100"
            type="tel"
            value={formDetails.phone}
            placeholder="Phone Number (optional)"
            onChange={(e) => onFormUpdate("phone", e.target.value)}
          />
      <input
            className="form-control-lg w-100"
            type="text"
            required
            value={formDetails.subject}
            placeholder="Subject"
            onChange={(e) => onFormUpdate("subject", e.target.value)}
          /> 
      <textarea
           className="form-control-lg w-100"
           required
            rows="6"
            value={formDetails.message}
            placeholder="Message"
            onChange={(e) => onFormUpdate("message", e.target.value)}
          ></textarea>
        <div className="message">
      <button type="submit" className="btn btn-lg contact-us-form-button">
        {buttonText}
      </button>
      <div>
      {status.message && (
          <div className="message-notofication alert alert-dark">
            <p className={status.success === false ? "danger" : "success"}>
              {status.message}
            </p>
          </div>
          
        )}
        </div>
        </div>
     </form>
     </div>
    </div>
    <div class="mapouter location-map">
          <div class="gmap_canvas"><iframe class="gmap_iframe" frameborder="0"
           scrolling="no" marginheight="0" marginwidth="0" 
           src="https://maps.google.com/maps?width=628&amp;height=400&amp;hl=en&amp;q= 27 
           SOBIESKI STREET Buffalo NY , 14212 US&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
            </iframe><a href="https://capcuttemplate.org/">Capcut Template</a>
          </div>
    </div>
    </div>
    </>
    
  );
};

export default Contact;

