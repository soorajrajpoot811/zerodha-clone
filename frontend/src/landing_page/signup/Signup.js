// import React, { useState } from "react";
// import axios from "axios";

// function Signup() {
//   // State variables inputs ka data manage karne ke liye
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [message, setMessage] = useState("");
//   const [loading, setLoading] = useState(false);

//   // Form submit ka logic
//   const handleSignup = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setMessage("");

//     try {
//       // Backend api hit ho rahi hai (Port 3002 par)
//       const response = await axios.post("http://localhost:3002/signup", {
//         username,
//         email,
//         password,
//       });

//       if (response.data.success) {
//         setMessage("Signup Successful! Redirecting to Dashboard...");
//         setTimeout(() => {
//           // Successful signup ke baad user automatic Dashboard (Port 3001) par chala jayega
//           window.location.href = "http://localhost:3001";
//         }, 1500);
//       }
//     } catch (error) {
//       // Backend errors handling (jaise user already exists)
//       setMessage(error.response?.data?.message || "Something went wrong. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="container p-5 mt-5" style={{ minHeight: "70vh" }}>
//       <div className="row justify-content-center align-items-center mt-5">
        
//         {/* Left Side: Illustration / Text Branding */}
//         <div className="col-6 text-center p-5">
//           {/* Public folder me signup.svg ya koi bhi image ho uska path check kar lena, nahi toh image bina bhi text dikhega */}
//           <img src="media/images/signup.svg" alt="Signup Graphic" style={{ width: "70%" }} onError={(e)=>{e.target.style.display='none'}} />
//           <h2 className="mt-4 fs-2 fw-normal text-muted">Invest in the future</h2>
//           <p className="text-muted fs-5 mt-3">Join over 1.5+ crore investors who trust Zerodha.</p>
//         </div>

//         {/* Right Side: Signup Form */}
//         <div className="col-4 border p-4 rounded shadow-sm bg-white" style={{ borderColor: "#eee" }}>
//           <h2 className="fs-3 fw-bold mb-2 text-dark">Open a new account</h2>
//           <p className="text-muted mb-4" style={{ fontSize: "14px" }}>
//             Create your credentials to start trading seamlessly.
//           </p>

//           {message && (
//             <div className={`alert ${message.includes("Successful") ? "alert-success" : "alert-danger"} text-center small`}>
//               {message}
//             </div>
//           )}
          
//           <form onSubmit={handleSignup}>
//             <div className="mb-3">
//               <label className="form-label text-muted small fw-bold">Username</label>
//               <input
//                 type="text"
//                 className="form-control p-2"
//                 placeholder="Choose a username"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//                 required
//               />
//             </div>

//             <div className="mb-3">
//               <label className="form-label text-muted small fw-bold">Email address</label>
//               <input
//                 type="email"
//                 className="form-control p-2"
//                 placeholder="Enter your email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//             </div>

//             <div className="mb-3">
//               <label className="form-label text-muted small fw-bold">Password</label>
//               <input
//                 type="password"
//                 className="form-control p-2"
//                 placeholder="Create a strong password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//             </div>

//             <button type="submit" className="btn btn-primary w-100 mt-3 p-2 fs-6 fw-bold" disabled={loading}>
//               {loading ? "Creating Account..." : "Continue"}
//             </button>
//           </form>
          
//           <p className="text-muted text-center mt-4 small">
//             By continuing, you agree to our terms and privacy policy.
//           </p>
//         </div>

//       </div>
//     </div>
//   );
// }

// export default Signup;

import React, { useState } from "react";
import axios from "axios";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await axios.post("https://zerodha-backend-api.onrender.com/signup", {
        username,
        email,
        password,
      });

      if (response.data.success) {
        setMessage("Signup Successful! Redirecting...");
        setTimeout(() => {
          window.location.href = "http://zerodha-clone-tl12.vercel.app";
        }, 1500);
      }
    } catch (error) {
      setMessage(error.response?.data?.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div 
      className="d-flex justify-content-center align-items-center" 
      style={{ 
        minHeight: "100vh",
        width: "100vw",
        // Ek aalishan scenic nature/mountain image background me set ki hai
        backgroundImage: "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 9999
      }}
    >
      {/* Dynamic Glassmorphic Form Container */}
      <div 
        className="p-5 rounded-4 shadow-lg text-center"
        style={{
          width: "420px",
          background: "rgba(255, 255, 255, 0.08)", // Ekdam halka reflection
          backdropFilter: "blur(18px)", // Solid backend blur effect
          WebkitBackdropFilter: "blur(18px)",
          border: "1px solid rgba(255, 255, 255, 0.25)", // Sleek transparent boundary line
          boxShadow: "0 20px 50px rgba(0, 0, 0, 0.3)",
          color: "#fff"
        }}
      >
        <h2 className="fs-2 fw-bold mb-4" style={{ color: "#fff", letterSpacing: "1px" }}>
          Register
        </h2>

        {message && (
          <div 
            className="alert p-2 small border-0 text-white mb-4"
            style={{ background: "rgba(255, 255, 255, 0.2)", backdropFilter: "blur(5px)" }}
          >
            {message}
          </div>
        )}
        
        <form onSubmit={handleSignup}>
          
          {/* Username Input with Minimal Transparent Underline */}
          <div className="mb-4 text-start" style={{ position: "relative" }}>
            <span style={{ position: "absolute", left: "5px", top: "8px", color: "rgba(255,255,255,0.7)" }}>
              <i className="fa fa-user-o" aria-hidden="true"></i>
            </span>
            <input
              type="text"
              className="form-control text-white"
              placeholder="Username"
              style={{
                background: "transparent",
                border: "none",
                borderBottom: "2px solid rgba(255, 255, 255, 0.6)",
                borderRadius: "0",
                paddingLeft: "30px",
                boxShadow: "none"
              }}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          {/* Email Input */}
          <div className="mb-4 text-start" style={{ position: "relative" }}>
            <span style={{ position: "absolute", left: "5px", top: "8px", color: "rgba(255,255,255,0.7)" }}>
              <i className="fa fa-envelope-o" aria-hidden="true"></i>
            </span>
            <input
              type="email"
              className="form-control text-white"
              placeholder="Email"
              style={{
                background: "transparent",
                border: "none",
                borderBottom: "2px solid rgba(255, 255, 255, 0.6)",
                borderRadius: "0",
                paddingLeft: "30px",
                boxShadow: "none"
              }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password Input */}
          <div className="mb-5 text-start" style={{ position: "relative" }}>
            <span style={{ position: "absolute", left: "5px", top: "8px", color: "rgba(255,255,255,0.7)" }}>
              <i className="fa fa-lock" aria-hidden="true"></i>
            </span>
            <input
              type="password"
              className="form-control text-white"
              placeholder="Password"
              style={{
                background: "transparent",
                border: "none",
                borderBottom: "2px solid rgba(255, 255, 255, 0.6)",
                borderRadius: "0",
                paddingLeft: "30px",
                boxShadow: "none"
              }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Pure White Rounded Button (Just like your screenshot) */}
          <button 
            type="submit" 
            className="btn btn-light w-100 p-2 fs-5 fw-bold mt-2 text-dark shadow-sm"
            style={{ 
              borderRadius: "30px",
              background: "#fff",
              border: "none"
            }}
            disabled={loading}
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </form>
        
        <p className="mt-4 mb-0" style={{ fontSize: "14px", color: "rgba(255,255,255,0.7)" }}>
          Already have an account? <a href="#" style={{ color: "#fff", textDecoration: "underline" }}>Login</a>
        </p>
      </div>
    </div>
  );
}

export default Signup;