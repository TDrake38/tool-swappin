import React from "react"
import { InputGroup, FormControl } from "react-bootstrap";


function AreaInput() {
    return(
        <InputGroup className="mb-3">
    <FormControl
      placeholder="Location"
      aria-label="Location"
      aria-describedby="basic-addon1"
    />
  </InputGroup>
    )
}


export default AreaInput;