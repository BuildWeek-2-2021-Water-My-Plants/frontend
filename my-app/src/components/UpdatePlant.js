//UNIT 3 PERSON
//use GET params from url to get plant id
//use that id to get plant info out of state
//use plant info out of state to pre-fill the plant form
//onSubmit handler that is PUT request to update plant info
//onSubmit, also redirect to PlantList

import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";

const initialPlant = {
  id: "",
  nickname: "",
  species: "",
  h2oFrequency: null,
  image: "",
};

function UpdateUserForm(props) {
  const [item, setItem] = useState(initialItem);
  const id = props.match.params.id;

  const changeHandler = (ev) => {
    ev.persist();

    //if updatePlants([
    // ...plants.filter((item) => item.id !== plantToEdit.id),
    // plantToEdit,

    setItem({
      ...item,
      [ev.target.name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`/plants/${id}`, item) //may need to update
      .then((res) => {
        props.setItems(res.data);
        props.history.push(`/plant-list/${id}`); //may need to update
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <form></form>
    </div>
  );
}

export default UpdateUserForm;
