import React from "react"
import { InputGroup, FormControl } from "react-bootstrap";


function NameInput() {
    return(
        <InputGroup className="mb-3">
    <FormControl
      placeholder="Name"
      aria-label="Name"
      aria-describedby="basic-addon1"
    />
  </InputGroup>
    )
}

export default NameInput;