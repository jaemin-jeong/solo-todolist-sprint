import React from 'react'

const GroupListEntry = (props) => {

  function clickHandler(e){
    console.log(e.target.id)
    props.selectCurrentGroup(e.target.id)
  }

  return(
      <div id = {props.group} onClick = {clickHandler}>{props.group}</div>
  )
}

export default GroupListEntry