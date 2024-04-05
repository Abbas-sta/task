import React, {useState} from "react";
import '../css/checkout.css'
import Footer from "../component/Footer";
import Alert from 'react-bootstrap/Alert';
import Badge from 'react-bootstrap/Badge';



const Checkout = () => {

  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [country, setCountry] = useState("")
  const [address1, setAddress1] = useState("")
  const [address2, setAddress2] = useState("")
  const [phone, setPhone] = useState("")
  const [city, setCity] = useState("")
  const [pincode, setPincode] = useState("")
  const [state, setState] = useState("")
  const [message, setMessage] = useState("")
  const [showMessage, setShowMessage] = useState(false)

  const handleCountryChange = (e) =>{
    setCountry(e.target.value)
  }

  const handlePhone = (e) =>{
    if(! isNaN(e.target.value)){
      setPhone(e.target.value)
    }
  }
  const handleContinueToPayment = (e) => {
    if(phone.length < 9 || firstname.length < 1 || lastname.length < 1 || city.length < 1 || country.length < 1 || state.length < 1 || pincode.length < 1 || address1.length < 1){
      setMessage("Please Fill all of the mandatory fields !.")
      setShowMessage(true)
    }
  }
  return (
    <>
      <div className="text-center p-3" style={{ background: "black" }}>
        <h1 className="nav-text" style={{ color: "white" }}>
          urban
        </h1>
      </div>
      <div className="container" id="new-container-checkout">
        <h3>Checkout</h3>
        <form className='check-form'>
          <div className="form-group">
            <label htmlFor="country">Country<Badge bg="white" text="danger">*</Badge></label>
            <select name="country" id="country" value={country} onChange={handleCountryChange}>
              <option value="" hidden>Select...</option>
              <option value="india">India</option>
              <option value="usa">USA</option>
              <option value="canada">Canada</option>
            </select>
          </div>
          <div className='flex-formfield'>
            <div className="form-group">
              <label htmlFor="firstName">First Name<Badge bg="white" text="danger">*</Badge></label>
              <input type="text" name="firstName" id="firstName" value={firstname} onChange={(e) => setFirstname(e.target.value)} required />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name<Badge bg="white" text="danger">*</Badge></label>
              <input type="text" name="lastName" id="lastName" value={lastname} onChange={(e) => setLastname(e.target.value)} required />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="addressLine1">Address Line 1<Badge bg="white" text="danger">*</Badge></label>
            <input type="text" name="addressLine1" id="addressLine1" value={address1} onChange={(e) => setAddress1(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="addressLine2">Address Line 2</label>
            <input type="text" name="addressLine2" id="addressLine2" value={address2} onChange={(e) => setAddress2(e.target.value)} />
          </div>
          <div className='flex-formfield'>
            <div className="form-group">
              <label htmlFor="city">City<Badge bg="white" text="danger">*</Badge></label>
              <input type="text" name="city" id="city" value={city} onChange={(e) => setCity(e.target.value)} required />
            </div>
            <div className="form-group">
              <label htmlFor="state">State<Badge bg="white" text="danger">*</Badge></label>
              <input type="text" name="state" id="state" value={state} onChange={(e) => setState(e.target.value)} required />
            </div>
            <div className="form-group">
              <label htmlFor="pinCode">Pin Code<Badge bg="white" text="danger">*</Badge></label>
              <input type="text" name="pinCode" id="pinCode" value={pincode}  onChange={(e) => setPincode(e.target.value)}  required />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="mobileNumber">Mobile Number</label>
            <input type="tel" name="mobileNumber" id="mobileNumber" value={phone}  onChange={handlePhone} required />
          </div>
          <button type="submit" onClick={handleContinueToPayment}>Continue to Payment</button>
          <div className={showMessage ? "alert" : "hidden"}> <Alert variant="danger">
          {message}
        </Alert></div>
        </form>

      </div>
      <Footer footerData="© 2024 URBAN E-RETAIL LIMITED All Rights Reserved." />
    </>
  );
};

export default React.memo(Checkout);
