import React from 'react'
import GroupListEntry from './GroupListEntry'
import './GroupList.css'


const GroupList = (props) => {
  // console.log('props.currentState.groupList는 : ', props.currentState) //왜 숫자가 나옴..?? 
  // console.log(props.currentState);

  return (
    <ul>
      <div className='currentGroup'>
        <div className='asideTitle'>Current Group</div>
        <div>{props.currentState.currentGroup}</div>
      </div>
      <div className='groupList'>
        <div className='asideTitle'>GroupList</div>
        <div className='groupListEntry'>
          {props.currentState.groupList.map(element =>
            <GroupListEntry
              key={element.toString()}
              group={element}
              selectCurrentGroup={props.selectCurrentGroup}
              deleteGroup={props.deleteGroup}
            />
          )}
        </div>
      </div>
      {/* <div>
        <GroupListEntry
          key={props.currentState.group.toString()}
          group={props.currentState.group} />
        </div> */}
    </ul>
  )
}

export default GroupList