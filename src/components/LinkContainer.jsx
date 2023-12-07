import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import Table from './Table';
import Form from './Form';

function LinkContainer() {
  // State to hold the favorite links
  const [favLinks, setFavLinks] = useState([]);

  // Remove link logic
  const handleRemove = (index) => {
    // TODO - Create logic for setting the state to filter array and remove favLink at index
    const updatedLinks = [...favLinks];
    updatedLinks.splice(index, 1);
    setFavLinks(updatedLinks);
  };

  // Add new link logic
  const handleSubmit = (favLink) => {
    // TODO - Create logic to set state and add new favLink to favLinks array in state
    setFavLinks([...favLinks, favLink]);
  };

  return (
    <div>
      <h1>My Favorite Links</h1>
      <p>Add a new link with a name and URL to the table! </p>
      {/* Pass the favLinks state and handleRemove function to the Table component */}
      <Table linkData={favLinks} removeLink={handleRemove} />
      <h1>Add New</h1>
      {/* Pass the handleSubmit function to the Form component */}
      <Form submitForm={handleSubmit} />
    </div>
  );
}

export default LinkContainer;
