import React,{useState,useEffect} from 'react';
import "./CustomOrder.css";
import quoteimg from "../../../images/quote.jpg";

function Customorder() {
  const formInitialDetails = {
    name:"",
    email: "",
    phone: "",
    logo_n:"",
    r_format:"",
    software:"",
    dimensions:"",
    r_colors:"",
    no_of_colors:"",
    centerpoint:"",
    comments:"",
    remarks:"",
    file: null,
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Request Quote");
  const [status, setStatus] = useState({});
  const [selectedFileName, setSelectedFileName] = useState("");

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFormDetails({
      ...formDetails,
      file: selectedFile,
    });
    setSelectedFileName(selectedFile.name); // Set the selected file name
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Submitting...");

    const formData = new FormData();
    formData.append("file", formDetails.file);
    formData.append("name", formDetails.name);
    formData.append("email", formDetails.email);
    formData.append("phone", formDetails.phone);
    formData.append("logo_n", formDetails.logo_n);
    formData.append("r_format", formDetails.r_format);
    formData.append("software", formDetails.software);
    formData.append("dimensions", formDetails.dimensions);
    formData.append("r_colors", formDetails.r_colors);
    formData.append("no_of_colors", formDetails.no_of_colors);
    formData.append("centerpoint", formDetails.centerpoint);
    formData.append("comments", formDetails.comments);
    formData.append("remarks", formDetails.remarks);

    try {
      const response = await fetch("/api/cuorder", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();
      
      if (result.code === 200) {
        setStatus({ success: true, message: "Custom Order Placed Successfully." });
      } else {
        setStatus({
          success: false,
          message: "Something Went Wrong. Please try again later !",
        });
      }
    } catch (error) {
      setStatus({
        success: false,
        message: "Something Went Wrong. Please try again later !",
      });
    } finally {
      setButtonText("Request Quote");
      setFormDetails(formInitialDetails);
      setSelectedFileName(""); 
      document.getElementById("fileInput").value = ""; // Reset the selected file name
    }
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
    <div className='customorder-main-container container-fluid m-0 p-0'>
        <div className="custom-order-header">
            <h1>CUSTOM ORDER</h1>
            <p>Welcome to our custom orders page, where you can bring your creative vision to life! Whether you need embroidery digitizing or art digitizing services, we're here to transform your ideas into stunning, high-quality designs. Place a custom order today and let our skilled team of professionals handle the rest.</p>
        </div>
       <div className='custom-order-content p-4'>
       <div className='custom-order-page-image'>
        <img src={quoteimg} className='animated-image'/>
       </div>
       <div className='custom-order-form-section'>
       <form onSubmit={handleSubmit}>
          <div className='input-field name-field'>
            <div className='field-icon'>
            <i class="fa-solid fa-user fa-2x pt-2"></i>
            </div>
            <input
            className="form-control-lg w-100"
            type="text"
            required
            placeholder="Full Name"
            value={formDetails.name}
            onChange={(e) => onFormUpdate("name", e.target.value)}
          /> 
          </div>
          <div className='input-field email-field'>
            <div className='field-icon'>
            <i class="fa-solid fa-envelope fa-2x pt-2"></i>
            </div>
            <input
            className="form-control-lg w-100"
            type="email"
            required
            placeholder="Email Address"
            value={formDetails.email}
            onChange={(e) => onFormUpdate("email", e.target.value)}
          /> 
          </div>
          <div className='input-field phone-field'>
            <div className='field-icon'>
            <i class="fa-solid fa-phone fa-2x pt-2"></i>
            </div>
            <input
            className="form-control-lg w-100"
            type="text"
            required
            placeholder="Phone Number"
            value={formDetails.phone}
            onChange={(e) => onFormUpdate("phone", e.target.value)}
          /> 
          </div>
          <div className='input-flex'>
          <input
            className="form-control-lg"
            type="text"
            required
            placeholder="Logo Name"
            value={formDetails.logo_n}
            onChange={(e) => onFormUpdate("logo_n", e.target.value)}
          /> 
          <input
            className="form-control-lg"
            type="text"
            required
            placeholder="Required Format"
            value={formDetails.r_format}
            onChange={(e) => onFormUpdate("r_format", e.target.value)}
          /> 
          </div>
          <div className='input-flex'>
          <input
            className="form-control-lg"
            type="text"
            placeholder="Software"
            value={formDetails.software}
            onChange={(e) => onFormUpdate("software", e.target.value)}
          /> 
          <input
            className="form-control-lg"
            type="text"
            required
            placeholder="Dimensions"
            value={formDetails.dimensions}
            onChange={(e) => onFormUpdate("dimensions", e.target.value)}
          /> 
          </div>
          <div className='input-flex'>
          <input
            className="form-control-lg"
            type="text"
            required
            placeholder="Required Colors"
            value={formDetails.r_colors}
            onChange={(e) => onFormUpdate("r_colors", e.target.value)}
          /> 
          <select className="form-select-lg" 
          value={formDetails.no_of_colors}
          onChange={(e) => onFormUpdate("no_of_colors", e.target.value)}
          >
          <option selected>Number of Colors</option>
           <option value="1">1</option>
           <option value="2">2</option>
           <option value="3">3</option>
           <option value="4">4</option>
           <option value="5">5</option>
           <option value="6">6</option>
           <option value="7">7</option>
           <option value="8">8</option>
           <option value="9">9</option>
           <option value="10">10</option>

           </select>
          </div>
          <select className="form-select-lg w-100 center-point-select"
          required
          value={formDetails.centerpoint}
          onChange={(e) => onFormUpdate("centerpoint", e.target.value)}
          >
          <option selected> Center Point (choose)</option>
           <option value="Top Center">Top Center</option>
           <option value="Top Left">Top Left</option>
           <option value="Top Right">Top Right</option>
           <option value="Center Left">Center Left</option>
           <option value="Center">Center</option>
           <option value="Center Right">Center Right</option>
           <option value="Bottom Left">Bottom Left</option>
           <option value="Bottom Center">Bottom Center</option>
           <option value="Bottom Right">Bottom Right</option>
           </select>
           <div className='input-field name-field'>
            <div className='field-icon'>
            <i class="fa-solid fa-comment fa-2x pt-2"></i>
            </div>
            <input
            className="form-control-lg w-100"
            type="text"
            value={formDetails.comments}
            onChange={(e) => onFormUpdate("comments", e.target.value)}
            required
            placeholder="Comments"
          /> 
          </div>
         <textarea
         rows={5}
         className='text-area-field form-control-lg w-100'
         type='text'
         placeholder='Remarks' 
         required
         value={formDetails.remarks}
          onChange={(e) => onFormUpdate("remarks", e.target.value)}
         ></textarea>
        <div className='choose-file-section'>
        <p>Upload Art Work</p>
        <input
        required
        className='w-100'
          id="fileInput"
           type="file"
         onChange={handleFileChange}
          />
        </div>

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
        </div>
     
        </>

  )
}

export default Customorder





