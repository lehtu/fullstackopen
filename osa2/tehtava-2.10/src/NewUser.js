import React from 'react';

const NewUser = (props) => (
  <form onSubmit={props.formOnSubmit}>
    <div>
      nimi: <input value={props.newNameValue} onChange={props.newNameOnChange} />
    </div>
    <div>
      puhelin: <input value={props.newNumberValue} onChange={props.newNumberOnChange} />
    </div>
    <div>
      <button type="submit">lisää</button>
    </div>
  </form>
)

export default NewUser
