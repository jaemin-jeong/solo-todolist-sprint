import React from 'react'

const GroupAdd = (props) => {

  let groupName = '';

  function changeHandler(e){
    groupName = e.target.value;
  }

  function clickHandler(){
    props.addGroup(groupName);
  }

  return(
    <ul>
      <input className = 'input2' type = 'text' className = 'GroupName' onChange = {changeHandler}></input>
      <button className = 'button1' onClick = {clickHandler}>add</button>
    </ul>
  )
}

export default GroupAdd;