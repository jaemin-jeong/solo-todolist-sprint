import React from 'react'
import GroupListEntry from './GroupListEntry'


const GroupList = (props) => {
  console.log(props.currentState.groupList);
  console.log(props.currentState);

  return (
    <ul>
      <div className='groupName'>
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