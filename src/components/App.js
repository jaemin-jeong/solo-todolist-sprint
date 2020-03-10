import React from 'react';
import CreateNew from './CreateNew'
import GroupList from './GroupList'
import WriteTodoThing from './WriteTodoThing'
import TodoList from './TodoList'

// 1. state 관리
// 2. WriteTodoThing component에 함수 props 전달
// 2-1. TodoList component에 상태 props 전달
// 3. Groupadd component에 함수 props 전달
// 3-1. GroupList component, TodoList component에 상태 props 전달
class App extends React.Component {
  // state: todoList, groupList, darkMode,
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
      group: 'ㅋ',
      darkMode: 'false',
    }
    this.saveArr = [];
    this.save = {
      //그룹명을 key로, todoList배열을 value로
    };
    this.init = this.init.bind(this);
    this.addTodoThing = this.addTodoThing.bind(this);
    this.addGroup = this.addGroup.bind(this);
    this.showTodoList = this.showTodoList.bind(this);
  }

  //CreateNew를 클릭하면 실행되는 함수
  init(){
    this.save[this.state.group] = this.state.todoList;
    this.saveArr.push(this.save);
    this.setState({
      todoList: [],
    })
    console.log(this.saveArr);
  }

  //할 일 추가할때 사용할 거
  addTodoThing(addThing){
    this.setState({
      todoList: this.state.todoList.push(addThing),
    })    
    this.showTodoList();
    console.log(this.showTodoList());
  }

  //그룹 추가할 때 사용할 거
  addGroup(groupName){
    this.setState({
      group:groupName,
    })
  }

  //todoList에 보여줄 것
  showTodoList(){
    this.setState({
      todoList: this.state.todoList,
      group: this.state.group,
      darkMode: this.state.darkMode,
    })
    console.log(this.state)
  }


  render() {
    return (
      <div>
        <CreateNew init = {this.init}/>
        <TodoList 
        showTodoList = {this.showTodoList}
        currentState = {this.state}
        />
        <GroupList addGroup = {this.addGroup}/>
        <WriteTodoThing addTodoThing = {this.addTodoThing}/>
      </div>
    )
  }
}

export default App;