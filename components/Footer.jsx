import React from "react";

const Footer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gapgit-y-10 px-32 py-14 bg-gray-100 text-gray-600">
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">ABOUT</h5>
        <p>How Airbnb Works</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Luxe</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">COMMUNITY</h5>
        <p>Accessibility</p>
        <p>Clone Site</p>
        <p>Join Our Team</p>
        <p>Community Hub</p>
        <p>Find a Roommate</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">HOST</h5>
        <p>Apply for Hosting</p>
        <p>Q&A</p>
        <p>Reporting Users</p>
        <p>Michael Millen</p>
        <p>Hello Youtube</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">SUPPORT</h5>
        <p>Help Center</p>
        <p>Trust & Safety</p>
        <p>Terms of Service</p>
        <p>Email Us</p>
        <p>Phone Support</p>
      </div>
    </div>
  );
};

export default Footer;
