import React from "react";
import { Input } from "./Input";

//this is needed in order to upload a file, a basic <Input type = 'file'> doesn't work (safety measures)
function FileInput(props){

  const {name, onChange, className} = props

  return (

      <Input className = {className} type="file" onChange={onChange} name={name} />
  );
};

export {FileInput}