import React from 'react'
import GroupListEntry from './GroupListEntry'


const GroupList = (props) => {
  // console.log('props.currentState.groupList는 : ', props.currentState) //왜 숫자가 나옴..?? 
  // console.log(props.currentState);

  return (
    <ul>
      <div className='groupName'>
        <h4>Current Group</h4>
        <div>{props.currentState.currentGroup}</div>
        <h4>GroupList</h4>
        {props.currentState.groupList.map(element =>
          <GroupListEntry 
          key={element.toString()} 
          group={element} 
          selectCurrentGroup = {props.selectCurrentGroup}
          />
        )}
        {/* <div>
        <GroupListEntry
          key={props.currentState.group.toString()}
          group={props.currentState.group} />
        </div> */}
      </div>
    </ul>
  )
}

export default GroupList