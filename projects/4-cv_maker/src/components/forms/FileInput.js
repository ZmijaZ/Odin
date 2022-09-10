import React from "react";
import { Input } from "../extra/Input";

//this is needed in order to upload a file, a basic <Input type = 'file'> doesn't work (safety measures)
const FileInput = ({ name, onChange }) => {
  return (

      <Input type="file" onChange={onChange} name={name} />
  );
};

export {FileInput}