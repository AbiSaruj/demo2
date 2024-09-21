import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function ListUser() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    
    courseId: '',
    courseName: '',
    courseDuration: '',	
    courseFee: '',	
    content1: '',	
    content2: '',	
    image1: '',	
    image2: ''
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost/react34/api/index.php', inputs).then(function (response) {
      console.log(response.data);
      navigate('/');
    });
  };

  return (
       <div className="container mt-5 course-container col-8">
      <div className="row justify-content-center">
        <div className="col-md-11">
          <h1 className="text-center">Create Course</h1>
          <form onSubmit={handleSubmit}>
            <div className="row mb-2">
              <div className="col-6">
                <div className="form-group mb-1">
                  <label htmlFor="courseId">Course ID</label>
                  <input
                    type="text"
                    id="courseId"
                    name="courseId"
                    className="form-control"
                    value={inputs.courseId}
                    onChange={handleChange}
                    placeholder="Enter course ID"
                  />
                </div>
              </div>
              <div className="col-6">
                <div className="form-group mb-1">
                  <label htmlFor="courseName">Course Name</label>
                  <input
                    type="text"
                    id="courseName"
                    name="courseName"
                    className="form-control"
                    value={inputs.courseName}
                    onChange={handleChange}
                    placeholder="Enter course name"
                  />
                </div>
              </div>
            </div>

            <div className="row mb-2">
              <div className="col-6">
                <div className="form-group mb-1">
                  <label htmlFor="courseDuration">Course Duration</label>
                  <input
                    type="text"
                    id="courseDuration"
                    name="courseDuration"
                    className="form-control"
                    value={inputs.courseDuration}
                    onChange={handleChange}
                    placeholder="Enter course duration"
                  />
                </div>
              </div>
              <div className="col-6">
                <div className="form-group mb-1">
                  <label htmlFor="courseFee">Course Fee</label>
                  <input
                    type="text"
                    id="courseFee"
                    name="courseFee"
                    className="form-control"
                    value={inputs.courseFee}
                    onChange={handleChange}
                    placeholder="Enter course fee"
                  />
                </div>
              </div>
            </div>

            <div className="form-group mb-2">
              <label htmlFor="content1">Content 1</label>
              <textarea
                id="content1"
                name="content1"
                className="form-control"
                value={inputs.content1}
                onChange={handleChange}
                placeholder="Enter content 1"
                rows="3"
              />
            </div>

            <div className="form-group mb-2">
              <label htmlFor="content2">Content 2</label>
              <textarea
                id="content2"
                name="content2"
                className="form-control"
                value={inputs.content2}
                onChange={handleChange}
                placeholder="Enter content 2"
                rows="3"
              />
            </div>

            <div className="row mb-2">
              <div className="col-6">
                <div className="form-group mb-1">
                  <label htmlFor="image1">Image 1 URL</label>
                  <input
                    type="file"
                    id="image1"
                    name="image1"
                    className="form-control"
                    value={inputs.image1}
                    onChange={handleChange}
                    placeholder="Enter URL for image 1"
                  />
                </div>
              </div>
              <div className="col-6">
                <div className="form-group mb-1">
                  <label htmlFor="image2">Image 2 URL</label>
                  <input
                    type="file"
                    id="image2"
                    name="image2"
                    className="form-control"
                    value={inputs.image2}
                    onChange={handleChange}
                    placeholder="Enter URL for image 2"
                  />
                </div>
              </div>
            </div>

            <div className="text-center">
              <button type="submit" className="btn btn-danger">Save</button>
            </div>
          </form>
        </div>
      </div>
    </div>

  );
}
