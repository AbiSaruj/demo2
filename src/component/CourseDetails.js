import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function CourseDetails() {
  const { id } = useParams();  // Extract the course ID from the URL
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourseDetails = async () => {
      try {
        const response = await axios.get(`http://localhost/react34/api/courses/${id}`);
        setCourse(response.data);
      } catch (err) {
        setError('Failed to fetch course details');
      } finally {
        setLoading(false);
      }
    };
    
    fetchCourseDetails();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!course) return <p>No course details available</p>;

  return (
      <div>
      <div className="container mt-5">
        {/* Course Image with Overlay */}
        <div className="position-relative text-center course-container mb-5">
          <img  src={`http://localhost/react34/api/images/${course.image1}`} alt={course.courseName} className="img-fluid course-image"/>
          <div className="course-overlay-text">
            <h4 className="text-light">{course.courseName}</h4>
            <h3> {course.courseDuration}</h3>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-md-9 mt-5">
            <p>
            {course.content1}
            </p>
          </div>
          <div className="col-md-3 d-flex align-items-center justify-content-center">
            <div className="container">
              <div className="row justify-content-center">
                <div className="text-center">
                  <div className="card p-3 shadow-sm course-fee-card">
                    <h4>Course Fee</h4>
                    <p className="lead">LKR {course.courseFee}</p>
                    <p><small>*Conditions Apply</small></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-md-4 mb-5">
            <img src={`http://localhost/react34/api/images/${course.image2}`} alt={course.courseName} className="img-fluid course-image"  />
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-5">
            <h3>Course Content:</h3>
            <ul>
              <li>{course.content2}</li>
              
            </ul>
            <button className="btn btn-danger mt-5" >Apply Now</button>
          </div>
        </div>
      </div>

     
    </div>
  );
}
