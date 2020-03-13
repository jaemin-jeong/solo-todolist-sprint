import React from 'react'

const PreviousTodoListEntry = (props) => {

  return (
    <div>
      <div onClick = {() => props.callPrevList(props.prevStuff)}>{'Todo List ' + props.prevStuff.ID + '번째'}</div>
    </div>
  )
}

export default PreviousTodoListEntry