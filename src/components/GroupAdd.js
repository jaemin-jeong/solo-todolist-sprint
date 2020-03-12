import React from 'react'

const GroupAdd = (props) => {

  let groupName = '';

  function changeHandler(e){
    groupName = e.target.value;
  }

  function clickHandler(){
    //console.log('groupName은', groupName);
    props.addGroup(groupName);
  }

  return(
    <ul>
      <input type = 'text' className = 'GroupName' onChange = {changeHandler}></input>
      <button className = 'button2' onClick = {clickHandler}>add</button>
    </ul>
  )
}

export default GroupAdd;