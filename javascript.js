<form  method="POST" enctype="multipart/form-data" >
<h2>Fill Data</h2>
<p class="hint-text">Fill below form.</p>

<div class="form-group">
<div class="row">
<div class="col"><input type="text" class="form-control" name="fname" placeholder="First Name" required="true"></div>
<div class="col"><input type="text" class="form-control" name="lname" placeholder="Last Name" required="true"></div>
</div>        	
</div>

<div class="form-group">
 <input type="text" class="form-control" name="contactno" placeholder="Enter your Mobile Number" required="true" maxlength="10" pattern="[0-9]+">
 </div>
        
<div class="form-group">
<input type="email" class="form-control" name="email" placeholder="Enter your Email id" required="true">
</div>
		
<div class="form-group">
<textarea class="form-control" name="address" placeholder="Enter Your Address" required="true"></textarea>
</div>  

<div class="form-group">
<input type="file" class="form-control" name="profilepic"  required="true">
<span style="color:red; font-size:12px;">Only jpg / jpeg/ png /gif format allowed.</span>
</div>      
      
<div class="form-group">
<button type="submit" class="btn btn-success btn-lg btn-block" name="submit">Submit</button>
</div>
</form>

<form  method="POST" enctype="multipart/form-data" >
<h2>Fill Data</h2>
<p class="hint-text">Fill below form.</p>

<div class="form-group">
<div class="row">
<div class="col"><input type="text" class="form-control" name="fname" placeholder="First Name" required="true"></div>
<div class="col"><input type="text" class="form-control" name="lname" placeholder="Last Name" required="true"></div>
</div>        	
</div>

<div class="form-group">
 <input type="text" class="form-control" name="contactno" placeholder="Enter your Mobile Number" required="true" maxlength="10" pattern="[0-9]+">
 </div>
        
<div class="form-group">
<input type="email" class="form-control" name="email" placeholder="Enter your Email id" required="true">
</div>
		
<div class="form-group">
<textarea class="form-control" name="address" placeholder="Enter Your Address" required="true"></textarea>
</div>  

<div class="form-group">
<input type="file" class="form-control" name="profilepic"  required="true">
<span style="color:red; font-size:12px;">Only jpg / jpeg/ png /gif format allowed.</span>
</div>      
      
<div class="form-group">
<button type="submit" class="btn btn-success btn-lg btn-block" name="submit">Submit</button>
</div>
</form>





<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Submission</title>
    <!-- Bootstrap CSS -->
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
    <!-- DataTables CSS -->
    <link href="https://cdn.datatables.net/1.10.21/css/dataTables.bootstrap4.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
</head>
<body>

<div class="container mt-5">
    <div class="row">
        <!-- Left side (Table) -->
        <div class="col-lg-8 col-md-12 mb-4">
            <h2>Data Table</h2>
            <table id="data_table" class="table table-bordered table-responsive-sm">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Profile Pic</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- Data will be dynamically inserted here -->
                </tbody>
            </table>
        </div>
        <!-- Right side (Form) -->
        <div class="col-lg-4 col-md-12">
            <form id="form_submit">
                <h2>Fill Data</h2>
                <p class="hint-text">Fill the form below.</p>

                <input type="hidden" id="record_id" name="id"> <!-- Hidden field to store record ID -->

                <div class="form-group">
                    <div class="row">
                        <div class="col">
                            <input type="text" class="form-control" id="name" name="name" placeholder="Enter the Name" required="true">
                        </div>
                    </div>        	
                </div>

                <div class="form-group">
                    <input type="number" class="form-control" id="price" name="price" placeholder="Enter Price" required="true" maxlength="10" pattern="[0-9]+">
                </div>

                <div class="form-group">
                    <input type="file" class="form-control" id="profilepic" name="profilepic">
                    <span style="color:red; font-size:12px;">Only jpg / jpeg / png / gif format allowed.</span>
                </div>      

                <div class="form-group">
                    <button type="submit" class="btn btn-success btn-lg btn-block" name="submit">Submit</button>
                </div>
            </form>
        </div>
    </div>
</div>

<!-- jQuery and Bootstrap JS -->
<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
<!-- DataTables JS -->
<script src="https://cdn.datatables.net/1.10.21/js/jquery.dataTables.min.js"></script>
<script src="https://cdn.datatables.net/1.10.21/js/dataTables.bootstrap4.min.js"></script>

<script>
    function fetch_data() {
        $.ajax({
            url: 'http://localhost/MYCURD/api.php', // The server-side script to handle the form submission
            type: 'POST',
            data: { type: "fetch" },
            success: function(response) {
                if (response.status) {
                    var data = response.data;
                    var tableBody = $('#data_table tbody');
                    tableBody.empty(); // Clear existing rows
                    
                    var id = 1;
                    $.each(data, function(index, item) {
                        var row = `<tr>
                            <td>${id}</td>
                            <td>${item.Name}</td>
                            <td>${item.Price}</td>
                            <td><img src="image/${item.ProfilePic}" alt="Profile Pic" width="50"></td>
                            <td>
                                <i class="fas fa-edit text-success" 
                                   data-id="${item.Id}" 
                                   data-name="${item.Name}" 
                                   data-price="${item.Price}" 
                                   onclick="edit_record(this)"></i> 
                                &nbsp; 
                                <i class="fas fa-trash-alt text-danger" onclick="delete_record(${item.Id})"></i>
                            </td>
                        </tr>`;
                        tableBody.append(row);
                        id++;
                    });

                    $('#data_table').DataTable();
                } else {
                    alert(response.message);
                }
            },
            error: function(xhr, status, error) {
                alert('Error: ' + error);
            }
        });
    }
    
    $(document).ready(function() {
        $('#data_table').DataTable();

        $('#form_submit').on('submit', function(e) {
            e.preventDefault(); // Prevent the default form submission
    
            var formData = new FormData(this);
            var recordId = $('#record_id').val();
            formData.append('type', recordId ? 'update' : 'insert'); // Use 'update' if editing, 'insert' otherwise
    
            $.ajax({
                url: 'http://localhost/MYCURD/api.php', // The server-side script to handle the form submission
                type: 'POST',
                data: formData,
                contentType: false, // Important: Required when using FormData
                processData: false, // Important: Required when using FormData
                success: function(response) {
                    fetch_data();
                    alert(response.message);
                    // Reset form after submission
                    $('#form_submit')[0].reset();
                    $('#record_id').val('');
                    $('button[name="submit"]').text('Submit');
                },
                error: function(xhr, status, error) {
                    alert('Error: ' + error);
                }
            });
        });

        fetch_data();
    });

    function edit_record(element) {
        var id = $(element).data('id');
        var name = $(element).data('name');
        var price = $(element).data('price');

        $('#record_id').val(id);
        $('#name').val(name);
        $('#price').val(price);
        $('button[name="submit"]').text('Update');
    }

    function delete_record(id) {
        $.ajax({
            url: 'http://localhost/MYCURD/api.php',
            type: 'POST',
            data: { type: "delete", id: id },
            beforeSend: function() {
                return confirm("Are you sure you want to delete this record?");
            },
            success: function(response) {
                fetch_data();
                alert(response.message);
            },
            error: function(xhr, status, error) {
                alert("An error occurred: " + error);
            }
        });
    }
</script>

</body>
</html>






<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header('Content-Type:application/json');
$date = date('Y-m-d H:i:s');

include "connect.php";


$type = $_POST['type'];

if ($type == "insert" || $type == "update") {
    $name = $_POST['name'];
    $price = $_POST['price'];
    $id = isset($_POST['id']) ? $_POST['id'] : null;

    $profilepic = $_FILES['profilepic'];
    $img_name = $profilepic['name'];
    $img_tmp_name = $profilepic['tmp_name'];

    // Define the upload directory
    $upload_dir = "image/";

    // Set the target file path with a new name
    $new_img_name = time() . "_" . basename($img_name);
    $target_file = $upload_dir . $new_img_name;

    if ($id) {
        // Fetch the current image name from the database
        $result = mysqli_query($con, "SELECT `ProfilePic` FROM `bdata` WHERE `Id`='$id'");
        $row = mysqli_fetch_assoc($result);
        $old_img_name = $row['ProfilePic'];
        $old_img_path = $upload_dir . $old_img_name;

        if ($img_name) {
            // If a new image is uploaded, update the image too
            $update = mysqli_query($con, "UPDATE `bdata` SET `Name`='$name', `Price`='$price', `ProfilePic`='$new_img_name' WHERE `Id`='$id'");
            if ($update) {
                // Remove the old image file if it exists
                if (file_exists($old_img_path)) {
                    unlink($old_img_path);
                }
                move_uploaded_file($img_tmp_name, $target_file);
                $response = array("status" => true, "message" => "Update Successful");
            } else {
                $response = array("status" => false, "message" => "Update Failed");
            }
        } else {
            // If no new image, update other fields only
            $update = mysqli_query($con, "UPDATE `bdata` SET `Name`='$name', `Price`='$price' WHERE `Id`='$id'");
            if ($update) {
                $response = array("status" => true, "message" => "Update Successful");
            } else {
                $response = array("status" => false, "message" => "Update Failed");
            }
        }
    } else {
        // Insert a new record
        $insert = mysqli_query($con, "INSERT INTO `bdata`(`Name`, `Price`, `ProfilePic`, `CreationDate`) VALUES ('$name','$price','$new_img_name','$date')");
        if ($insert) {
            move_uploaded_file($img_tmp_name, $target_file);
            $response = array("status" => true, "message" => "Inserted Successfully");
        } else {
            $response = array("status" => false, "message" => "Insert Failed");
        }
    }

    echo json_encode($response);
} else if ($type == "fetch") {
    $sql = "SELECT * FROM `bdata`";
    $sql_query = mysqli_query($con, $sql);
    $sql_num_rows = mysqli_num_rows($sql_query);
    if ($sql_num_rows > 0) {
        $sql_fetch = mysqli_fetch_all($sql_query, MYSQLI_ASSOC);
        $response = array("status" => true, "message" => "Success", "data" => $sql_fetch);
        echo json_encode($response);
    }
} else if ($type == "delete") {
    $id = $_POST['id'];
    // Fetch the image path
    $select_query = mysqli_query($con, "SELECT * FROM `bdata` WHERE id = '$id'");
    $select_fetch = mysqli_fetch_assoc($select_query);
    $image_name = $select_fetch['ProfilePic'];

    if ($image_name) {
        $imagePath = "image/$image_name";

        // Delete the image file from server
        if (unlink($imagePath)) {
            // Delete the image record from database
            $delete = mysqli_query($con, "DELETE FROM bdata WHERE id = '$id'");

            if ($delete) {
                echo json_encode(['status' => 'success', 'message' => 'Deleted Successfully']);
            } else {
                echo json_encode(['status' => 'error', 'message' => 'Failed to delete']);
            }
        } else {
            echo json_encode(['status' => 'error', 'message' => 'Failed to delete image file']);
        }
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Image not found']);
    }
}
?></link>