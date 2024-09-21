<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");
header('Content-Type: application/json'); 

include 'DbConnect.php';
$objDb = new DbConnect;
$conn = $objDb->connect();

$method = $_SERVER['REQUEST_METHOD'];
$path = explode('/', trim($_SERVER['REQUEST_URI'], '/'));

switch($method) {
    case "GET":
        if(isset($path[3]) && is_numeric($path[3])) {
            // Fetch individual course by ID
            $sql = "SELECT * FROM courses WHERE id = :id";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':id', $path[3]);
            $stmt->execute();
            $course = $stmt->fetch(PDO::FETCH_ASSOC);
    
            if($course) {
                echo json_encode($course);
            } else {
                echo json_encode(['message' => 'Course not found']);
            }
        } else {
            // Fetch all courses
            $sql = "SELECT * FROM courses";
            $stmt = $conn->prepare($sql);
            $stmt->execute();
            $courses = $stmt->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode($courses);
        }
        break;

    case "PUT":
        if (isset($path[3]) && is_numeric($path[3])) {
            $courseId = $path[3];
            $course = json_decode(file_get_contents('php://input'));

            $sql = "UPDATE courses 
                    SET courseId = :courseId, courseName = :courseName, courseDuration = :courseDuration, 
                        courseFee = :courseFee, content1 = :content1, content2 = :content2, 
                        image1 = :image1, image2 = :image2 
                    WHERE id = :id";

            $stmt = $conn->prepare($sql);

            $stmt->bindParam(':courseId', $course->courseId);
            $stmt->bindParam(':courseName', $course->courseName);
            $stmt->bindParam(':courseDuration', $course->courseDuration);
            $stmt->bindParam(':courseFee', $course->courseFee);
            $stmt->bindParam(':content1', $course->content1);
            $stmt->bindParam(':content2', $course->content2);
            $stmt->bindParam(':image1', $course->image1);
            $stmt->bindParam(':image2', $course->image2);
            $stmt->bindParam(':id', $courseId);

            $response = $stmt->execute()
                ? ['status' => 1, 'message' => 'Record updated successfully.']
                : ['status' => 0, 'message' => 'Failed to update record.'];

            echo json_encode($response);
        } else {
            echo json_encode(['status' => 0, 'message' => 'Invalid ID for update.']);
        }
        break;

    case "DELETE":
        if (isset($path[3]) && is_numeric($path[3])) {
            $sql = "DELETE FROM courses WHERE id = :id";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':id', $path[3]);

            $response = $stmt->execute()
                ? ['status' => 1, 'message' => 'Record deleted successfully.']
                : ['status' => 0, 'message' => 'Failed to delete record.'];

            echo json_encode($response);
        } else {
            echo json_encode(['status' => 0, 'message' => 'Invalid ID for deletion.']);
        }
        break;

    default:
        echo json_encode(['status' => 0, 'message' => 'Method not allowed']);
        break;
}
?>
