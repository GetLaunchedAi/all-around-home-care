<?php
header('Content-Type: application/json');

$apiKey  = getenv('GOOGLE_PLACES_API_KEY');
$placeId = getenv('GOOGLE_PLACE_ID');

$url = "https://maps.googleapis.com/maps/api/place/details/json" .
       "?place_id={$placeId}" .
       "&fields=reviews,rating,user_ratings_total" .
       "&key={$apiKey}";

$response = file_get_contents($url);
echo $response;
