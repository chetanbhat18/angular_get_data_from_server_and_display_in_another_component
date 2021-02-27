<?php

include('config.php');

header('Access-Control-Allow-Origin: *');

    
    	$query="select * from categories";
    	$indian = array();
	    $run=mysqli_query($con,$query);
	    while($row=mysqli_fetch_array($run))
  	{
  		$CategoryID=$row['CategoryID'];
	    $temp['CategoryID']=$CategoryID;
	    $CategoryName=$row['CategoryName'];
	    $temp['CategoryName']=$CategoryName;
	    $Description=$row['Description'];
	    $temp['Description']=$Description;
	     
	     array_push($indian, $temp);
  	}
	  echo json_encode($indian);

?>