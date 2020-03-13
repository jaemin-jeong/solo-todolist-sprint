import React from 'react'

const GroupListEntry = (props) => {

  let currGroup;
  function clickHandler(e){
    currGroup = e.target.id;
    props.selectCurrentGroup(currGroup);
  }


  return(
      <div id = {props.group} onClick = {clickHandler}>{props.group}
      <button className = 'button1' onClick = {() => props.deleteGroup(props.group)}>del</button>
      </div>
      //질문: ()=> 이게 여기서 정확히 어떤 역할을 하는지??
      //<div onClick = {() => props.selectCurrentGroup(props.group)}>{props.group}</div>
  )
}

export default GroupListEntry