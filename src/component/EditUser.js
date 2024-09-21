import { useEffect,useState } from "react";
import axios from "axios";
import { useNavigate,useParams } from "react-router-dom";

export default function CreateCourse() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    courseId: '',
    courseName: '',
    courseDuration: '',
    courseFee: '',
    content1: '',
    content2: '',
    image1: null, // Change to null for file handling
    image2: null  // Change to null for file handling
  });
  useEffect(() => {
    axios.get(`http://localhost/react34/api/index.php/${id}`)
        .then(response => {
            // Set form inputs with fetched data
            setInputs(response.data);
        })
        .catch(error => console.error('Error fetching user:', error));
}, [id]);
const handleChange = (event) => {
  const { name, value } = event.target;
  setInputs(prev => ({ ...prev, [name]: value }));
};

  
  const handleSubmit = async (event) => {
    event.preventDefault();
    axios.put(`http://localhost/react34/api/index.php/${id}`,inputs).then(response => {
      console.log(response.data);
      navigate('/');
  })
 
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
                  <label htmlFor="image1">Image 1</label>
                  <input
                    type="file"
                    id="image1"
                    name="image1"
                    className="form-control"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-6">
                <div className="form-group mb-1">
                  <label htmlFor="image2">Image 2</label>
                  <input
                    type="file"
                    id="image2"
                    name="image2"
                    className="form-control"
                    onChange={handleChange}
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
