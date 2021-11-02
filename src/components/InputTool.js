import React from "react"
import { InputGroup, FormControl } from "react-bootstrap";


function ToolInput() {
    return(
        <InputGroup className="mb-3">
    <FormControl
      placeholder="Tool Name"
      aria-label="Tool Name"
      aria-describedby="basic-addon1"
    />
  </InputGroup>
    )
}


export default ToolInput;