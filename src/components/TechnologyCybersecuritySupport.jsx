// // import { useEffect, useState } from "react";

// // function TechnologyCybersecuritySupport() {
// //   const [showPopup, setShowPopup] = useState(true);

// //   useEffect(() => {
// //     // This useEffect ensures the popup shows on the first visit when the component mounts
// //     setShowPopup(true);
// //   }, []);

// //   const [isOpen, setIsOpen] = useState(false);
// //   return (
// //     // <div className="flex flex-col min-h-screen  text-white">

// //     <div
// //     className={`flex flex-col min-h-screen text-white ${
// //       showPopup ? "pointer-events-none" : "pointer-events-auto"
// //     }`}
// //   >

// //        <nav className="bg-gray-800 shadow-md sticky top-0 z-50">
// //       <div className="max-w-7xl mx-auto px-4">
// //         {/* Top bar: logo + hamburger + (desktop) links */}
// //         <div className="flex justify-between items-center py-4">
// //           {/* Logo/Brand */}
// //           <div className="text-white text-xl font-bold">
// //             CyberSecure
// //           </div>

// //           {/* Hamburger Menu Button (visible on small screens) */}
// //           <button
// //             onClick={() => setIsOpen(!isOpen)}
// //             type="button"
// //             className="md:hidden text-gray-300 hover:text-white focus:outline-none"
// //             aria-label="Toggle Menu"
// //           >
// //            <img src="/menu-icon.jpg" alt="menu-icon" className="h-6 w-6"/>
// //           </button>

// //           {/* Desktop Menu (hidden on small screens) */}
// //           <div className="hidden md:flex space-x-6">
// //             <a
// //               href="#home"
// //               className="text-gray-300 hover:text-teal-400 transition-colors text-lg font-medium"
// //             >
// //               Home
// //             </a>
// //             <a
// //               href="#about"
// //               className="text-gray-300 hover:text-teal-400 transition-colors text-lg font-medium"
// //             >
// //               About Us
// //             </a>
// //             <a
// //               href="#services"
// //               className="text-gray-300 hover:text-teal-400 transition-colors text-lg font-medium"
// //             >
// //               Services
// //             </a>
// //             <a
// //               href="#support"
// //               className="text-gray-300 hover:text-teal-400 transition-colors text-lg font-medium"
// //             >
// //               Support
// //             </a>
// //             <a
// //               href="#contact"
// //               className="text-gray-300 hover:text-teal-400 transition-colors text-lg font-medium"
// //             >
// //               Contact
// //             </a>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Mobile Menu (visible if isOpen=true, hidden on md+ screens) */}
// //       {isOpen && (
// //         <div className="md:hidden px-4 pb-4">
// //           <a
// //             href="#home"
// //             className="block text-gray-300 hover:text-teal-400 py-2 transition-colors text-lg font-medium"
// //           >
// //             Home
// //           </a>
// //           <a
// //             href="#about"
// //             className="block text-gray-300 hover:text-teal-400 py-2 transition-colors text-lg font-medium"
// //           >
// //             About Us
// //           </a>
// //           <a
// //             href="#services"
// //             className="block text-gray-300 hover:text-teal-400 py-2 transition-colors text-lg font-medium"
// //           >
// //             Services
// //           </a>
// //           <a
// //             href="#support"
// //             className="block text-gray-300 hover:text-teal-400 py-2 transition-colors text-lg font-medium"
// //           >
// //             Support
// //           </a>
// //           <a
// //             href="#contact"
// //             className="block text-gray-300 hover:text-teal-400 py-2 transition-colors text-lg font-medium"
// //           >
// //             Contact
// //           </a>
// //         </div>
// //       )}
// //     </nav>

// //       <header className="w-full text-center py-16 bg-teal-50 text-gray-800">
// //   {/* Content Container */}
// //   <div className="max-w-4xl mx-auto px-4">
// //     <h1 className="text-5xl md:text-6xl font-extrabold">
// //       Technology and Cybersecurity Support
// //     </h1>
// //     <p className="mt-4 text-xl md:text-2xl max-w-2xl mx-auto">
// //       Your Trusted Partner in Digital Security
// //     </p>

// //     {showPopup && (
// //             <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 pointer-events-auto">

// //             <div className="relative bg-white rounded shadow-lg max-w-sm w-full overflow-hidden">
// //               {/* Close Button */}
// //               <button
// //                 onClick={() => setShowPopup(false)}
// //                 className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
// //               >
// //                 <svg
// //                   xmlns="http://www.w3.org/2000/svg"
// //                   fill="none"
// //                   viewBox="0 0 24 24"
// //                   strokeWidth="2"
// //                   stroke="currentColor"
// //                   className="w-6 h-6"
// //                 >
// //                   <path
// //                     strokeLinecap="round"
// //                     strokeLinejoin="round"
// //                     d="M6 18L18 6M6 6l12 12"
// //                   />
// //                 </svg>
// //               </button>
// //               {/* Popup Content */}
// //               <img
// //                 src="/Housing-pop-up-no-number.jpg"
// //                 alt="Housing Popup"
// //                 className="w-full h-auto"
// //               />
// //             </div>
// //           </div>
// //         )}

// //     {/* Call-to-Action Buttons */}
// //     <div className="mt-8 flex justify-center space-x-4">
// //       <a
// //         href="#services"
// //         className="inline-block bg-teal-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg
// //                    hover:bg-teal-700 transition transform hover:scale-105"
// //       >
// //         Explore Our Services
// //       </a>
// //       <a
// //         href="#contact"
// //         className="inline-block bg-green-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg
// //                    hover:bg-green-700 transition transform hover:scale-105"
// //       >
// //         Contact Us Now
// //       </a>
// //     </div>
// //   </div>
// // </header>

// //       <main className="flex-grow container mx-auto px-4 py-8">
// //         <section id="home" className="mb-12">
// //           <h2 className="text-3xl font-semibold text-teal-400 mb-6">Welcome to Technology and Cybersecurity Support</h2>
// //           <p className="text-black mb-6">
// //             We provide expert solutions for digital privacy protection, online fraud prevention, and intellectual property security. Protect your digital assets and stay ahead of cyber threats with our professional services.
// //           </p>
// //           {/* <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
// //             <a
// //               href="#services"
// //               className="bg-teal-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-teal-700 transition transform hover:scale-105 text-center"
// //             >
// //               Explore Our Services
// //             </a>
// //             <a
// //               href="#contact"
// //               className="bg-green-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-green-700 transition transform hover:scale-105 text-center"
// //             >
// //               Contact Us Now
// //             </a>
// //           </div> */}
// //         </section>

// //         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
// //   {/* About Section */}
// //   <section id="about" className="p-4">
// //     <h2 className="text-3xl font-semibold text-teal-400 mb-6">About Us</h2>
// //     <p className="text-black mb-6">
// //       At CyberSecure Solutions, we specialize in cutting-edge cybersecurity and
// //       technology services tailored for individuals and businesses. Our mission
// //       is to secure your digital world and provide peace of mind in an
// //       ever-changing online environment.
// //     </p>
// //     <ul className="list-disc list-inside text-black space-y-2">
// //       <li><strong>Innovation:</strong> Staying ahead of cybersecurity trends.</li>
// //       <li><strong>Integrity:</strong> Prioritizing your privacy and trust.</li>
// //       <li><strong>Excellence:</strong> Delivering unmatched service and expertise.</li>
// //     </ul>
// //   </section>

// //   {/* Services Section */}
// //   <section id="services" className="p-4">
// //     <h2 className="text-3xl font-semibold text-teal-400 mb-6">Our Services</h2>

// //     {/* Digital Privacy Protection */}
// //     <div className="mb-8">
// //       <h3 className="text-2xl font-bold text-teal-300 mb-4">Digital Privacy Protection</h3>
// //       <ul className="list-disc list-inside text-black space-y-2">
// //         <li>Data Privacy Audits</li>
// //         <li>Compliance with GDPR, HIPAA, and CCPA</li>
// //         <li>Secure Communication Solutions</li>
// //       </ul>
// //     </div>

// //     {/* Online Fraud Prevention */}
// //     <div className="mb-8">
// //       <h3 className="text-2xl font-bold text-teal-300 mb-4">Online Fraud Prevention</h3>
// //       <ul className="list-disc list-inside text-black space-y-2">
// //         <li>AI-Powered Fraud Detection Systems</li>
// //         <li>Phishing Awareness Training</li>
// //         <li>Secure Payment Solutions</li>
// //       </ul>
// //     </div>

// //     {/* Intellectual Property Protection */}
// //     <div className="mb-8">
// //       <h3 className="text-2xl font-bold text-teal-300 mb-4">Intellectual Property Protection</h3>
// //       <ul className="list-disc list-inside text-black space-y-2">
// //         <li>Trademark and Patent Filing</li>
// //         <li>Digital Rights Management</li>
// //         <li>IP Litigation Support</li>
// //       </ul>
// //     </div>
// //   </section>

// //   {/* Support Section */}
// //   <section id="support" className="p-4">
// //     <h2 className="text-3xl font-semibold text-teal-400 mb-6">Customer Support</h2>
// //     <p className="text-black mb-6">
// //       We’re here to help with all your cybersecurity needs. Reach out to us through any
// //       of the channels below:
// //     </p>
// //     <ul className="list-disc list-inside text-black space-y-2">
// //       <li><strong>Phone Support:</strong> +1-800-SECURE-IT</li>
// //       <li><strong>Email Support:</strong> support@cybersecure.com</li>
// //       <li><strong>Live Chat:</strong> Available 24/7 on our website</li>
// //       <li><strong>Emergency Incident Response:</strong> +1-800-911-CYBER</li>
// //     </ul>
// //   </section>
// // </div>

// //         <section id="contact" className="mb-12">
// //           <h2 className="text-3xl font-semibold text-teal-400 mb-6">Contact Us</h2>
// //           <p className="text-black mb-6">
// //             If you have any questions or need assistance, don’t hesitate to get in touch:
// //           </p>
// //           <ul className="list-disc list-inside text-black space-y-2 mb-6">
// //             <li><strong>Address:</strong> 123 Cybersecurity Ave, Suite 100, New York, NY 10001</li>
// //             <li><strong>Email:</strong> support@cybersecure.com</li>
// //             <li><strong>Phone:</strong> +1-800-732-8734</li>
// //           </ul>

// //           {/* Contact Form */}
// //           <div className="max-w-2xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
// //             <form>
// //               <div className="mb-6">
// //                 <label htmlFor="name" className="block text-gray-200 font-medium mb-2">
// //                   Name:
// //                 </label>
// //                 <input
// //                   type="text"
// //                   id="name"
// //                   name="name"
// //                   required
// //                   className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-gray-700 text-black focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
// //                   placeholder="Your Name"
// //                 />
// //               </div>

// //               <div className="mb-6">
// //                 <label htmlFor="email" className="block text-gray-200 font-medium mb-2">
// //                   Email:
// //                 </label>
// //                 <input
// //                   type="email"
// //                   id="email"
// //                   name="email"
// //                   required
// //                   className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-gray-700 text-black focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
// //                   placeholder="Your Email"
// //                 />
// //               </div>

// //               <div className="mb-6">
// //                 <label htmlFor="query" className="block text-gray-200 font-medium mb-2">
// //                   Your Query:
// //                 </label>
// //                 <textarea
// //                   id="query"
// //                   name="query"
// //                   rows="5"
// //                   required
// //                   className="w-full px-4 py-3 border border-gray-700 rounded-lg bg-gray-700 text-black focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
// //                   placeholder="Describe your query..."
// //                 ></textarea>
// //               </div>

// //               <button
// //                 type="submit"
// //                 className="w-full bg-teal-600 text-white py-3 px-4 rounded-lg hover:bg-teal-700 transition transform hover:scale-105 flex items-center justify-center"
// //               >
// //                 <svg
// //                   className="w-5 h-5 mr-2 animate-bounce"
// //                   fill="none"
// //                   stroke="currentColor"
// //                   viewBox="0 0 24 24"
// //                   xmlns="http://www.w3.org/2000/svg"
// //                 >
// //                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
// //                 </svg>
// //                 Submit
// //               </button>
// //             </form>
// //           </div>
// //         </section>
// //       </main>

// //       {/* Footer */}
// //       <footer className="bg-gray-800   text-center py-6">
// //         <p>
// //           © {new Date().getFullYear()} CyberSecure Services. All Rights Reserved. |{' '}
// //           <a href="#" className="text-teal-400 hover:underline">
// //             Privacy Policy
// //           </a>
// //         </p>
// //       </footer>
// //     </div>
// //   );
// // }

// // export default TechnologyCybersecuritySupport;

// import { useEffect, useState } from "react";

// function TechnologyCybersecuritySupport() {
//   const [showPopup, setShowPopup] = useState(true);
//   const [isOpen, setIsOpen] = useState(false);

//   useEffect(() => {
//     if (showPopup) {
//       // Disable scrolling
//       document.body.style.overflow = "hidden";
//     } else {
//       // Enable scrolling
//       document.body.style.overflow = "auto";
//     }
//     return () => {
//       document.body.style.overflow = "auto";
//     };
//   }, [showPopup]);

//   // const [showPopup, setShowPopup] = useState(true);
//   // const [isOpen, setIsOpen] = useState(false);

//   useEffect(() => {
//     if (showPopup) {
//       // Disable scrolling
//       document.body.style.overflow = "hidden";
//     } else {
//       // Enable scrolling
//       document.body.style.overflow = "auto";
//     }
//     // Clean up to reset the overflow
//     return () => {
//       document.body.style.overflow = "auto";
//     };
//   }, [showPopup]);

//   return (
//     <div
//       className={`flex flex-col min-h-screen text-white ${
//         showPopup ? "pointer-events-none" : "pointer-events-auto"
//       }`}
//     >
//       {/* Navbar */}
//       <nav className="bg-gray-800 shadow-md sticky top-0 z-50">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="flex justify-between items-center py-4">
//             <div className="text-white text-xl font-bold">CyberSecure</div>
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               type="button"
//               className="md:hidden text-gray-300 hover:text-white focus:outline-none"
//               aria-label="Toggle Menu"
//             >
//               <img src="/menu-icon.jpg" alt="menu-icon" className="h-6 w-6" />
//             </button>
//             <div className="hidden md:flex space-x-6">
//               <a href="#home" className="text-gray-300 hover:text-teal-400">
//                 Home
//               </a>
//               <a href="#about" className="text-gray-300 hover:text-teal-400">
//                 About Us
//               </a>
//               <a href="#services" className="text-gray-300 hover:text-teal-400">
//                 Services
//               </a>
//               <a href="#support" className="text-gray-300 hover:text-teal-400">
//                 Support
//               </a>
//               <a href="#contact" className="text-gray-300 hover:text-teal-400">
//                 Contact
//               </a>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Popup */}
//       {/* {showPopup && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 pointer-events-auto">
//           <div className="relative bg-white rounded shadow-lg max-w-sm w-full overflow-hidden">
//             <button
//               onClick={() => setShowPopup(false)}
//               className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth="2"
//                 stroke="currentColor"
//                 className="w-6 h-6"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               </svg>
//             </button>
//             <img
//               src="/Housing-pop-up-no-number.jpg"
//               alt="Housing Popup"
//               className="w-full h-auto"
//             />
//           </div>
//         </div>
//       )} */}

// {showPopup && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 pointer-events-auto">
//           <div className="relative  rounded shadow-lg max-w-md w-full overflow-hidden">
//             {/* Close Button */}
//             <button
//               onClick={() => setShowPopup(false)}
//               className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth="2"
//                 stroke="currentColor"
//                 className="w-6 h-6"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               </svg>
//             </button>

//             {/* Popup Content */}
//             <div className="relative flex flex-col justify-center items-center p-6">
//               {/* Background Image */}
//               <img
//                 src="/Housing-pop-up-no-number.jpg"
//                 alt="Expert Support"
//                 className="w-full h-auto object-cover max-h-[90vh] sm:max-h-[70vh] md:max-h-[60vh] rounded-lg mb-4"
//               />

//               {/* Support Number */}
//               <a
//                 href="tel:+10865449042"
//                 className="bg-blue-600 text-white px-4 py-2 rounded-full text-base sm:text-lg md:text-xl font-semibold shadow-lg hover:bg-blue-700"
//                 onClick={(e) => {
//                   e.preventDefault();
//                   // Trigger keyboard input for phone number
//                   window.location.href = "tel:+10865449042";
//                 }}
//               >
//                 +108-654-49042
//               </a>
//             </div>
//           </div>
//         </div>
//       )}

//        <header className="w-full text-center py-16 bg-teal-50 text-gray-800">
//    <div className="max-w-4xl mx-auto px-4">
//      <h1 className="text-5xl md:text-6xl font-extrabold">
//        Technology and Cybersecurity Support
//      </h1>
//      <p className="mt-4 text-xl md:text-2xl max-w-2xl mx-auto">
//        Your Trusted Partner in Digital Security
//      </p>
//      <div className="mt-8 flex justify-center space-x-4">
//        <a
//          href="#services"
//          className="inline-block bg-teal-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg
//                     hover:bg-teal-700 transition transform hover:scale-105"
//        >
//          Explore Our Services
//        </a>
//        <a
//          href="#contact"
//          className="inline-block bg-green-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg
//                     hover:bg-green-700 transition transform hover:scale-105"
//        >
//          Contact Us Now
//        </a>
//      </div>
//    </div>
//  </header>

//       {/* Rest of the content */}
//       <main className="flex-grow container mx-auto px-4 py-8">
// <section id="home" className="mb-12">
//   <h2 className="text-3xl font-semibold text-teal-400 mb-6">Welcome to Technology and Cybersecurity Support</h2>
//   <p className="text-black mb-6">
//     We provide expert solutions for digital privacy protection, online fraud prevention, and intellectual property security. Protect your digital assets and stay ahead of cyber threats with our professional services.
//   </p>
//   {/* <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
//     <a
//       href="#services"
//       className="bg-teal-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-teal-700 transition transform hover:scale-105 text-center"
//     >
//       Explore Our Services
//     </a>
//     <a
//       href="#contact"
//       className="bg-green-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-green-700 transition transform hover:scale-105 text-center"
//     >
//       Contact Us Now
//     </a>
//   </div> */}
// </section>

// <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
// {/* About Section */}
// <section id="about" className="p-4">
// <h2 className="text-3xl font-semibold text-teal-400 mb-6">About Us</h2>
// <p className="text-black mb-6">
// At CyberSecure Solutions, we specialize in cutting-edge cybersecurity and
// technology services tailored for individuals and businesses. Our mission
// is to secure your digital world and provide peace of mind in an
// ever-changing online environment.
// </p>
// <ul className="list-disc list-inside text-black space-y-2">
// <li><strong>Innovation:</strong> Staying ahead of cybersecurity trends.</li>
// <li><strong>Integrity:</strong> Prioritizing your privacy and trust.</li>
// <li><strong>Excellence:</strong> Delivering unmatched service and expertise.</li>
// </ul>
// </section>

// {/* Services Section */}
// <section id="services" className="p-4">
// <h2 className="text-3xl font-semibold text-teal-400 mb-6">Our Services</h2>

// {/* Digital Privacy Protection */}
// <div className="mb-8">
// <h3 className="text-2xl font-bold text-teal-300 mb-4">Digital Privacy Protection</h3>
// <ul className="list-disc list-inside text-black space-y-2">
// <li>Data Privacy Audits</li>
// <li>Compliance with GDPR, HIPAA, and CCPA</li>
// <li>Secure Communication Solutions</li>
// </ul>
// </div>

// {/* Online Fraud Prevention */}
// <div className="mb-8">
// <h3 className="text-2xl font-bold text-teal-300 mb-4">Online Fraud Prevention</h3>
// <ul className="list-disc list-inside text-black space-y-2">
// <li>AI-Powered Fraud Detection Systems</li>
// <li>Phishing Awareness Training</li>
// <li>Secure Payment Solutions</li>
// </ul>
// </div>

// {/* Intellectual Property Protection */}
// <div className="mb-8">
// <h3 className="text-2xl font-bold text-teal-300 mb-4">Intellectual Property Protection</h3>
// <ul className="list-disc list-inside text-black space-y-2">
// <li>Trademark and Patent Filing</li>
// <li>Digital Rights Management</li>
// <li>IP Litigation Support</li>
// </ul>
// </div>
// </section>

// {/* Support Section */}
// <section id="support" className="p-4">
// <h2 className="text-3xl font-semibold text-teal-400 mb-6">Customer Support</h2>
// <p className="text-black mb-6">
// We’re here to help with all your cybersecurity needs. Reach out to us through any
// of the channels below:
// </p>
// <ul className="list-disc list-inside text-black space-y-2">
// <li><strong>Phone Support:</strong> +1-800-SECURE-IT</li>
// <li><strong>Email Support:</strong> support@cybersecure.com</li>
// <li><strong>Live Chat:</strong> Available 24/7 on our website</li>
// <li><strong>Emergency Incident Response:</strong> +1-800-911-CYBER</li>
// </ul>
// </section>
// </div>

// <section id="contact" className="mb-12">
//   <h2 className="text-3xl font-semibold text-teal-400 mb-6">Contact Us</h2>
//   <p className="text-black mb-6">
//     If you have any questions or need assistance, don’t hesitate to get in touch:
//   </p>
//   <ul className="list-disc list-inside text-black space-y-2 mb-6">
//     <li><strong>Address:</strong> 123 Cybersecurity Ave, Suite 100, New York, NY 10001</li>
//     <li><strong>Email:</strong> support@cybersecure.com</li>
//     <li><strong>Phone:</strong> +1-800-732-8734</li>
//   </ul>

//   {/* Contact Form */}
//   <div className="max-w-2xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
//     <form>
//       <div className="mb-6">
//         <label htmlFor="name" className="block text-gray-200 font-medium mb-2">
//           Name:
//         </label>
//         <input
//           type="text"
//           id="name"
//           name="name"
//           required
//           className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-gray-700 text-black focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
//           placeholder="Your Name"
//         />
//       </div>

//       <div className="mb-6">
//         <label htmlFor="email" className="block text-gray-200 font-medium mb-2">
//           Email:
//         </label>
//         <input
//           type="email"
//           id="email"
//           name="email"
//           required
//           className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-gray-700 text-black focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
//           placeholder="Your Email"
//         />
//       </div>

//       <div className="mb-6">
//         <label htmlFor="query" className="block text-gray-200 font-medium mb-2">
//           Your Query:
//         </label>
//         <textarea
//           id="query"
//           name="query"
//           rows="5"
//           required
//           className="w-full px-4 py-3 border border-gray-700 rounded-lg bg-gray-700 text-black focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
//           placeholder="Describe your query..."
//         ></textarea>
//       </div>

//       <button
//         type="submit"
//         className="w-full bg-teal-600 text-white py-3 px-4 rounded-lg hover:bg-teal-700 transition transform hover:scale-105 flex items-center justify-center"
//       >
//         <svg
//           className="w-5 h-5 mr-2 animate-bounce"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
//         </svg>
//         Submit
//       </button>
//     </form>
//   </div>
// </section>
// </main>
//     </div>
//   );
// }

// export default TechnologyCybersecuritySupport;




import { useEffect, useState } from "react";

function TechnologyCybersecuritySupport() {
  const [showPopup, setShowPopup] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (showPopup) {
      // Disable scrolling
      document.body.style.overflow = "hidden";
    } else {
      // Enable scrolling
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showPopup]);

  return (
    <div
      className={`flex flex-col min-h-screen text-white ${
        showPopup ? "pointer-events-none" : "pointer-events-auto"
      }`}
    >
      {/* Navbar */}
      <nav className="bg-gray-800 shadow-md sticky top-0 z-50">
  <div className="max-w-7xl mx-auto px-4">
    <div className="flex justify-between items-center py-4">
      <div className="text-white text-xl font-bold">CyberSecure</div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        className="md:hidden text-gray-300 hover:text-white focus:outline-none"
        aria-label="Toggle Menu"
      >
        <img src="/menu-icon.jpg" alt="menu-icon" className="h-6 w-6" />
      </button>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-6">
        <a href="#home" className="text-gray-300 hover:text-teal-400">
          Home
        </a>
        <a href="#about" className="text-gray-300 hover:text-teal-400">
          About Us
        </a>
        <a href="#services" className="text-gray-300 hover:text-teal-400">
          Services
        </a>
        <a href="#support" className="text-gray-300 hover:text-teal-400">
          Support
        </a>
        <a href="#contact" className="text-gray-300 hover:text-teal-400">
          Contact
        </a>
      </div>
    </div>

    {/* Mobile Menu */}
    <div
      className={`${
        isOpen ? "block" : "hidden"
      } md:hidden space-y-4 mt-4 bg-gray-800 p-4 rounded-lg`}
    >
      <a href="#home" className="block text-gray-300 hover:text-teal-400">
        Home
      </a>
      <a href="#about" className="block text-gray-300 hover:text-teal-400">
        About Us
      </a>
      <a href="#services" className="block text-gray-300 hover:text-teal-400">
        Services
      </a>
      <a href="#support" className="block text-gray-300 hover:text-teal-400">
        Support
      </a>
      <a href="#contact" className="block text-gray-300 hover:text-teal-400">
        Contact
      </a>
    </div>
  </div>
</nav>


      {/* Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 pointer-events-auto">
          <div className="relative bg-white rounded shadow-lg max-w-md w-full overflow-hidden">
            {/* Close Button */}
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 z-10"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Popup Content */}
            <div className="relative flex justify-center items-center">
              {/* Background Image */}
              <img
                src="/Housing-pop-up-no-number.jpg"
                alt="Expert Support"
                className="w-full h-auto object-cover max-h-[90vh] sm:max-h-[70vh] md:max-h-[60vh] rounded-lg"
              />

              {/* Support Number */}
              <a
                href="tel:+10865449042"
                className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4  rounded-full text-base sm:text-lg md:text-xl font-semibold shadow-lg hover:bg-blue-700"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = "tel:+10865449042";
                }}
              >
                +108-654-49042
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}

      <header className="w-full text-center py-16 bg-teal-50 text-gray-800">
      <img
    src="/technical.jpg"
    alt="Technology and Cybersecurity Support"
    className="absolute inset-0 w-full h-[25rem] object-cover opacity-40"
  />
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold">
            Technology and Cybersecurity Support
          </h1>
          <p className="mt-4 text-xl md:text-2xl max-w-2xl mx-auto">
            Your Trusted Partner in Digital Security
          </p>
          <div className="mt-12 flex justify-center space-x-4">
            <a
              href="#services"
              className="inline-block bg-teal-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg
                    hover:bg-teal-700 transition transform hover:scale-105"
            >
              Explore Our Services
            </a>
            <a
              href="#contact"
              className="inline-block bg-green-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg
                    hover:bg-green-700 transition transform hover:scale-105"
            >
              Contact Us Now
            </a>

          </div>
        </div>
        <div className="relative z-10 mt-10 flex justify-center">
    <img
      src="/Housing-pop-up.jpg"
      alt="Expert Support"
      className="w-64 md:w-72 lg:w-80 rounded-lg shadow-lg"
    />
  </div>
      </header>
    

      <main className="flex-grow container mx-auto px-4 py-8">
        <section id="home" className="mb-12">
          <h2 className="text-3xl font-semibold text-teal-400 mb-6">
            Welcome to Technology and Cybersecurity Support
          </h2>
          <p className="text-black mb-6">
            We provide expert solutions for digital privacy protection, online
            fraud prevention, and intellectual property security. Protect your
            digital assets and stay ahead of cyber threats with our professional
            services.
          </p>
          {/* <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
    <a
      href="#services"
      className="bg-teal-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-teal-700 transition transform hover:scale-105 text-center"
    >
      Explore Our Services
    </a>
    <a
      href="#contact"
      className="bg-green-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-green-700 transition transform hover:scale-105 text-center"
    >
      Contact Us Now
    </a>
  </div> */}


        </section>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* About Section */}
          <section id="about" className="p-4">
            <h2 className="text-3xl font-semibold text-teal-400 mb-6">
              About Us
            </h2>
            <p className="text-black mb-6">
              At CyberSecure Solutions, we specialize in cutting-edge
              cybersecurity and technology services tailored for individuals and
              businesses. Our mission is to secure your digital world and
              provide peace of mind in an ever-changing online environment.
            </p>
            <ul className="list-disc list-inside text-black space-y-2">
              <li>
                <strong>Innovation:</strong> Staying ahead of cybersecurity
                trends.
              </li>
              <li>
                <strong>Integrity:</strong> Prioritizing your privacy and trust.
              </li>
              <li>
                <strong>Excellence:</strong> Delivering unmatched service and
                expertise.
              </li>
            </ul>
          </section>

          {/* Services Section */}
          <section id="services" className="p-4">
            <h2 className="text-3xl font-semibold text-teal-400 mb-6">
              Our Services
            </h2>

            {/* Digital Privacy Protection */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-teal-300 mb-4">
                Digital Privacy Protection
              </h3>
              <ul className="list-disc list-inside text-black space-y-2">
                <li>Data Privacy Audits</li>
                <li>Compliance with GDPR, HIPAA, and CCPA</li>
                <li>Secure Communication Solutions</li>
              </ul>
            </div>

            {/* Online Fraud Prevention */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-teal-300 mb-4">
                Online Fraud Prevention
              </h3>
              <ul className="list-disc list-inside text-black space-y-2">
                <li>AI-Powered Fraud Detection Systems</li>
                <li>Phishing Awareness Training</li>
                <li>Secure Payment Solutions</li>
              </ul>
            </div>

            {/* Intellectual Property Protection */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-teal-300 mb-4">
                Intellectual Property Protection
              </h3>
              <ul className="list-disc list-inside text-black space-y-2">
                <li>Trademark and Patent Filing</li>
                <li>Digital Rights Management</li>
                <li>IP Litigation Support</li>
              </ul>
            </div>
          </section>

          {/* Support Section */}
          <section id="support" className="p-4">
            <h2 className="text-3xl font-semibold text-teal-400 mb-6">
              Customer Support
            </h2>
            <p className="text-black mb-6">
              We’re here to help with all your cybersecurity needs. Reach out to
              us through any of the channels below:
            </p>
            <ul className="list-disc list-inside text-black space-y-2">
              <li>
                <strong>Phone Support:</strong> +1-800-SECURE-IT
              </li>
              <li>
                <strong>Email Support:</strong> support@cybersecure.com
              </li>
              <li>
                <strong>Live Chat:</strong> Available 24/7 on our website
              </li>
              <li>
                <strong>Emergency Incident Response:</strong> +1-800-911-CYBER
              </li>
            </ul>
          </section>
        </div>

        <section id="contact" className="mb-12">
          <h2 className="text-3xl font-semibold text-teal-400 mb-6">
            Contact Us
          </h2>
          <p className="text-black mb-6">
            If you have any questions or need assistance, don’t hesitate to get
            in touch:
          </p>
          <ul className="list-disc list-inside text-black space-y-2 mb-6">
            <li>
              <strong>Address:</strong> 123 Cybersecurity Ave, Suite 100, New
              York, NY 10001
            </li>
            <li>
              <strong>Email:</strong> support@cybersecure.com
            </li>
            <li>
              <strong>Phone:</strong>    <a
                href="tel:+10865449042"
              
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = "tel:+10865449042";
               
                }}
                className="font-semibold py-3 px-6 hover:bg-green-700 transition transform hover:scale-105"
              >
                +108-654-49042
              </a>
            </li>
          </ul>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
            <form>
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block text-gray-200 font-medium mb-2"
                >
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-gray-700 text-black focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
                  placeholder="Your Name"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-gray-200 font-medium mb-2"
                >
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-gray-700 text-black focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
                  placeholder="Your Email"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="query"
                  className="block text-gray-200 font-medium mb-2"
                >
                  Your Query:
                </label>
                <textarea
                  id="query"
                  name="query"
                  rows="5"
                  required
                  className="w-full px-4 py-3 border border-gray-700 rounded-lg bg-gray-700 text-black focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
                  placeholder="Describe your query..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-teal-600 text-white py-3 px-4 rounded-lg hover:bg-teal-700 transition transform hover:scale-105 flex items-center justify-center"
              >
                <svg
                  className="w-5 h-5 mr-2 animate-bounce"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
                Submit
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-center py-6">
        <p>
          © {new Date().getFullYear()} CyberSecure Services. All Rights
          Reserved.

       
              <p>   <a
                href="tel:+10865449042"
              
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = "tel:+10865449042";
                }}
              >
                +108-654-49042
              </a></p>
        </p>
      </footer>
    </div>
  );
}

export default TechnologyCybersecuritySupport;
