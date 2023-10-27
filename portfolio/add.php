<?php
if (isset($_POST['name']) && isset($_POST['mail']) && isset($_POST['object']) && isset($_POST['message'])) {
    if(!empty($_POST['name']) && !empty($_POST['mail']) && filter_var($_POST['mail'], FILTER_VALIDATE_EMAIL) && !empty($_POST['object']) && !empty($_POST['message'])) {
        
        $nameName = htmlspecialchars($_POST['name']);
        $objectName = htmlspecialchars($_POST['object']);
        $emailName = filter_var($_POST['mail'], FILTER_SANITIZE_EMAIL);
        $messageName = htmlspecialchars($_POST['message']);
        

        $object = 'portfolio';
        $mailHeader = "from:".$nameName."<".$emailName.">\r\n";
        $recipient = "e.syam@codeur.online";
        $message = ' portfolio
        Name : '. $nameName . '
        E-mail : ' . $emailName . '
        Object : ' . $objectName . '
        Message : ' . $messageName ."" ; 


        $response = mail($recipient, $object, $message, $mailHeader);
            if ($response===true){
                echo json_encode(["responseServer"=>true, "responseMail"=>true]);
            }else{
                echo json_encode(["responseServer"=>true, "responseMail"=>false]);
            }
        } else {
            echo json_encode(["response"=>false]);
        }
}
  ?>