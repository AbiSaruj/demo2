import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

export default function Course1() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });

  const handleApplyClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = async () => {
    try {
      await axios.post(
        "http://localhost/Backend/Course_handle_application.php",
        {
          course_id: 1, // Update course_id for each course component
          course_name:
            "DIPLOMA IN PLANT ENGINEERING FOR SANITARY HEATING AND AIR CONDITIONING",
          ...formData,
        }
      );
      alert("Application submitted successfully");
      setShowModal(false);
    } catch (error) {
      console.error("Error submitting application:", error);
      alert("Failed to submit application");
    }
  };

  return (
    <div className="container mt-5">
      {/* Course Image with Overlay */}
      <div className="position-relative course-container mb-5">
        <img src={img1} className="img-fluid course-image" alt="Course" />
        <div className="course-overlay-text">
          <h4 className="text-light">
            DIPLOMA IN PLANT ENGINEERING FOR SANITARY HEATING AND AIR
            CONDITIONING
          </h4>
          <h4>(3.5 YEARS)</h4>
        </div>
      </div>
      <div className="row mb-5">
        <div className="col-md-9 mt-3">
          <p>
            AutoCare Lanka now offers a world-class vocational qualification in
            Modern building services. Accredited by the Japanese Chamber of
            Industry and Commerce, the Diploma in Plant Engineering ensures that
            you will be the best of the best when it comes to state-of-the-art
            building management systems. This is your chance to be a highly
            in-demand professional in a vastly expanding sector. This program
            covers all aspects of a modern building from plumbing, electrical,
            fire protection, access control, air conditioning, heating, solar
            power, and integrated building management systems. AutoCare Lanka is
            among the first to offer this qualification outside of Japan.
            English Language is part of the program to support future employment
            chances in Germany itself. Experience hands-on training with our
            extensive world-class brands.
          </p>
        </div>
        <div className="col-md-3 d-flex align-items-center justify-content-center">
          <div className="container">
            <div className="row justify-content-center">
              <div className="text-center">
                <div className="card p-3 shadow-sm course-fee-card">
                  <h4>Course Fee</h4>
                  <p className="lead">LKR 1,500,000</p>
                  <p>
                    <small>*Conditions Apply</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-md-5 mb-5">
          <img
            src={img2}
            className="img-fluid rounded custom-image-large"
            alt="Career"
          />
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-6">
          <h3>Course Content:</h3>
          <ul>
            <li>Basic metal works</li>
            <li>Checking and measuring systems and system components</li>
            <li>Assembling of components</li>
            <li>Manual cutting, machining and forming</li>
            <li>Machine processing</li>
            <li>Maintenance of equipment</li>
            <li>Maintenance of technical facilities and systems</li>
            <li>
              Installation of electrical assemblies and components in supply
              systems
            </li>
            <li>Assembly and disassembly of pipes and ducts</li>
            <li>Assembling, disassembling and transporting supply systems</li>
            <li>
              Implementation of insulation, sealing and protective measures
            </li>
            <li>
              Application of plant and systems technology as well as
              commissioning of waste disposal systems
            </li>
            <li>
              Functional control and maintenance of supply and disposal systems
            </li>
            <li>
              Differentiate and take into account sustainable systems and their
              possible users
            </li>
            <li>Implementation of hygiene measures</li>
            <li>Customer-oriented order processing</li>
            <li>
              Taking into account physical, structural, ecological and economic
              framework conditions
            </li>
            <li>Building Management Systems</li>
            <li>Technical drawing</li>
            <li>Technical calculations</li>
            <li>Finance and accounting</li>
            <li>Entrepreneurship</li>
            <li>Human resource management</li>
            <li>Labor law</li>
          </ul>
          <button className="btn btn-danger mt-5" onClick={handleApplyClick}>
            Apply Now
          </button>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div
          className="modal fade show d-block custom-modal"
          tabIndex="-1"
          role="dialog"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Apply Now</h5>
                <button
                  type="button"
                  className="close"
                  onClick={handleClose}
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="text"
                      className="form-control"
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                    />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleClose}
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
