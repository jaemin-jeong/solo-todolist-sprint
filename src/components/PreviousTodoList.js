import React from 'react'
import PreviousTodoListEntry from './PreviousTodoListEntry'
import './PreviousTodoList.css'

//saveArr값을 갖고 와야됨
//목록창에는 saveArr의 요소인 각각의 객체에서 value값으로 지정된 array의 0번째 인덱스를 보여주거나
//그냥 Date()를 이용해 해당 글이 작성된 시점을 보여준다.
//글작성 -> create new Todo List -> 보여주기
const PreviousTodoList = (props) => {

  return (
    <ul>
      <div className = 'asideTitle'>Previous Todo list</div>
      <div className = 'previousList'>
      {props.saveArr.map(stuff =>
        <PreviousTodoListEntry
          key={JSON.parse(stuff).id}
          prevStuff={JSON.parse(stuff)}
          //clearList = {props.clearList}
          callPrevList = {props.callPrevList} 
        />
      )}
      </div>
    </ul>
  )
}

export default PreviousTodoList