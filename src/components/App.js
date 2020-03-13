import React from 'react';
import CreateNew from './CreateNew'
import GroupList from './GroupList'
import WriteTodoThing from './WriteTodoThing'
import TodoList from './TodoList'
import GroupAdd from './GroupAdd'
import PreviousTodoList from './PreviousTodoList'
import './App.css'

class App extends React.Component {
  // state: todoList, groupList, darkMode,
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
      groupList: ['그룹 미지정'],
      currentGroup: '그룹 미지정',
      darkMode: 'false',
      //ID
      ID: 0,
    }
    this.save = {
      id: Date(),
      group: null,
      todoList: null,
      //ID
      ID: null,
    };
    this.saveArr = [];
    this.init = this.init.bind(this);
    this.addTodoThing = this.addTodoThing.bind(this);
    this.addGroup = this.addGroup.bind(this);
    this.selectCurrentGroup = this.selectCurrentGroup.bind(this);
    this.deleteGroup = this.deleteGroup.bind(this);
    this.deleteTodoThing = this.deleteTodoThing.bind(this);
    this.callPrevList = this.callPrevList.bind(this);
    //this.clearList = this.clearList.bind(this)
  }

  //새로운 todo list 만들기
  init() {
    this.save['group'] = this.state.currentGroup;
    this.save['todoList'] = this.state.todoList;
    //ID
    this.save['ID'] = this.state.ID;
    this.saveArr.push(JSON.stringify(this.save));
    this.setState({
      todoList: [],
      //ID
      ID: this.state.ID + 1,
    })
    console.log('saveArr : ', this.saveArr);
    console.log('save : ', this.save);
  }

  //todoThing 추가
  addTodoThing(addThing) {
    console.log('받은 addThing은 : ', addThing);
    this.setState({
      todoList: this.state.todoList.concat(addThing),
    })
  }

  //todoThing 삭제        //ID
  deleteTodoThing(target, ID) {
    this.setState({
      todoList: this.state.todoList.filter(thing => thing !== target),
    })

    //ID
    //saveArr는 mutable해야됨
    for (let i = 0; i < this.saveArr.length; i++) {
      let saveObj = JSON.parse(this.saveArr[i]);
      if (saveObj['ID'] === ID) {
        saveObj['todoList'].filter(todoThing => todoThing !== target);
        this.saveArr.splice(this.saveArr.indexOf(this.saveArr[i]), 1);
        this.saveArr.push(JSON.stringify(saveObj));
      }
    }
  }

  //그룹 추가
  addGroup(groupName) {
    this.setState({
      //groupList: this.state.groupList.push(groupName) <-- 이렇게 하면 안됨
      //push를 하면 state값을 직접적으로 바꿔주는게 되어버리기 때문에, immutable한 메소드를 사용해야됨.
      //참고: https://blog.naver.com/PostView.nhn?blogId=backsajang420&logNo=221353506054&redirect=Dlog&widgetTypeCall=true&directAccess=false
      groupList: this.state.groupList.concat(groupName),
    })
  }

  //그룹 삭제
  deleteGroup(target) {
    this.setState({
      groupList: this.state.groupList.filter(group => group !== target),
    })
  }

  //현재 그룹 선택
  selectCurrentGroup(selectedGroup) {
    this.setState({
      currentGroup: selectedGroup,
    })
    console.log('선택된 그룹은 : ', selectedGroup)
  }

  //이전 목록 불러오기.. state값을 save값으로 바꾸면 됨. 이슈: 이전 목록에 추가됨
  callPrevList(prevList) {
    this.setState({
      // todoList: this.state.todoList.concat().splice(0).concat(prevList.todoList),
      // currentGroup: this.state.currentGroup.concat().splice(0).concat(prevList.group),
      todoList: [].concat(prevList.todoList),
      currentGroup: [].concat(prevList.group),
    })
  }

  // clearList(){
  //   this.setState({
  //     todoList: this.state.todoList.concat([null]),
  //     currentGroup: this.state.currentGroup.concat(null),
  //   })
  // }


  componentDidMount() {
    console.log('----------------------------------')
    console.log('componentDidMount 했습니다~')
    console.log('this.state는 ', this.state)
    console.log('this.save는 ', this.save)
    console.log('this.saveArr는 ', this.saveArr)
    console.log('----------------------------------')
  }

  componentDidUpdate() {
    console.log('----------------------------------')
    console.log('componentDidUpdate 했습니다!')
    console.log('this.state는 ', this.state)
    console.log('this.save는 ', this.save)
    console.log('this.saveArr는 ', this.saveArr)
    console.log('----------------------------------')
  }

  render() {
    return (
      <div>
        <aside>
          <CreateNew init={this.init} />
          <PreviousTodoList
            saveArr={this.saveArr}
            //clearList = {this.clearList}
            callPrevList={this.callPrevList}
          />
          <GroupList
            currentState={this.state}
            selectCurrentGroup={this.selectCurrentGroup}
            deleteGroup={this.deleteGroup}
          />
          <GroupAdd addGroup={this.addGroup} />
        </aside>
        <main>
          <TodoList
            currentState={this.state}
            deleteTodoThing={this.deleteTodoThing}
          />
          <WriteTodoThing
            addTodoThing={this.addTodoThing}
            currentState={this.state}
          />
        </main>
        {/* <aside>
          <PreviousTodoList
            saveArr={this.saveArr}
            //clearList = {this.clearList}
            callPrevList={this.callPrevList}
          />
          <GroupList
            currentState={this.state}
            selectCurrentGroup={this.selectCurrentGroup}
            deleteGroup={this.deleteGroup}
          />
          <GroupAdd addGroup={this.addGroup} />
        </aside> */}
      </div>
    )
  }
}

export default App;