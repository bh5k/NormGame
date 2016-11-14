<?php

$host = "23.91.70.152";
$user = "luminou2_poller";
$pass = "stgPOLL@!";
$db = "luminou2_normquiz";

$conn = new mysqli($host, $user, $pass, $db);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

if ($_SERVER["REQUEST_METHOD"] == "POST") {

	$data = json_decode(file_get_contents("php://input"));

	$query =  "INSERT INTO emails (email, score) VALUES ('$data[0]', $data[1])";

	if ($conn->query($query) === TRUE) {
		echo "New record created successfully";
	} else {
		echo "Error: " . $query . "<br>" . $conn->error;
	}

} else if($_SERVER["REQUEST_METHOD"] == "GET") {

	if($_GET["pass"] != "jordan") {
		die("Access denied.");
	}

	$query = "SELECT * FROM emails";
	$result = $conn->query($query);

?>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>STG Completed Quizes</title>
	<link rel="icon" type="image/x-icon" href="data:image/x-icon;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQEAYAAABPYyMiAAAABmJLR0T///////8JWPfcAAAACXBIWXMAAABIAAAASABGyWs+AAAAF0lEQVRIx2NgGAWjYBSMglEwCkbBSAcACBAAAeaR9cIAAAAASUVORK5CYII=" />

	<meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" name="viewport">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
	<link href='http://fonts.googleapis.com/css?family=Lato' rel='stylesheet' type='text/css'>
</head>
<body class="container">
<style>
	body {
		font-family: "Lato", sans-serif;
	}
</style>
	<table class="table table-striped">
		<tr>
			<th>Email</th>
			<th>Score</th>
			<th>Timestamp</th>
		</tr>
		<?php while ($row = $result->fetch_assoc()) { ?>
			<tr>
				<td><?=$row["email"]?></td>
				<td><?=$row["score"]?></td>
				<td><?=$row["timestamp"]?></td>
			</tr>
		<?php } ?>
	</table>
</body>


<?php 

} 

$conn->close();
?>