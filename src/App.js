import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import ListUser from './component/ListUser';
import CreateUser from './component/CreateUser';
import EditUser from './component/EditUser';
import Courses from './component/Courses';
import CourseDetails from './component/CourseDetails'; // Import the CourseDetails component
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <div className="container-fluid">
        
              <ul >
                <li >
                  <Link  to="/">
                    List Users
                  </Link>
                </li>
                <li >
                  <Link to="/courses">
                    Courses
                  </Link>
                </li>
                <li >
                  <Link  to="/user/create">
                    Create User
                  </Link>
                </li>
              </ul>
         

          {/* Main content */}
          <main className="col-md-10 ms-sm-auto px-4">
            <Routes>
              <Route index element={<ListUser />} />
              <Route path="user/create" element={<CreateUser />} />
              <Route path="user/:id/edit" element={<EditUser />} />
              <Route path="courses" element={<Courses />} /> {/* Route for Courses */}
              <Route path="courses/:id" element={<CourseDetails />} /> {/* Route for CourseDetails */}
            </Routes>
          </main>
        </div>
    
    </BrowserRouter>
  );
}

export default App;
