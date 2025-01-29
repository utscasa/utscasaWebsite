import React from "react";
import { useParams } from "react-router-dom";

function Profile() {
  const { username } = useParams(); // Extract the 'username' parameter
// What I am gonna do is that on loading the page I will extract the name of the event from the URL 
// then I will use that name to fetch the event details from  for now an array of objects
// then load that information on the page appropriately
  return (
    <div>
      <h1>Welcome to {username}'s profile!</h1>
    </div>
  );
}

export default Profile;
