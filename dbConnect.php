<?php

function sanitize($field) {
              $output = filter_input(INPUT_POST, $field, FILTER_SANITIZE_STRING);
              return $output;
        
        }
        
        function callQuery($pdo, $query) {
            
            try {
                return $pdo->query($query);
            } catch (PDOException $ex) {
                throw $ex;
            }  
        }

try {

    $pdo = new PDO('mysql:host=localhost:3306;dbname=leaderboards', 'root');
    
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);  
    $pdo->exec('SET NAMES "utf8"');
    
} catch (Exception $ex) {
 
    throw $ex; 
}