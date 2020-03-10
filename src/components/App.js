import React from 'react';
import CreateNew from './CreateNew'
import GroupList from './GroupList'
import WriteTodoThing from './WriteTodoThing'
import TodoList from './TodoList'
import GroupAdd from './GroupAdd'


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
      groupList: ['그룹 미지정'],
      currentGroup: '',
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
    this.selectCurrentGroup = this.selectCurrentGroup.bind(this);
  }

  //CreateNew를 클릭하면 실행되는 함수
  init(){
    this.save[this.state.group] = this.state.todoList;
    this.saveArr.push(JSON.stringify(this.save));
    this.setState({
      todoList: [],
    })
    console.log('saveArr : ', this.saveArr);
    console.log('save : ', this.save);
  }

  //할 일 추가할때 사용할 거
  addTodoThing(addThing){
    this.setState({
      todoList: this.state.todoList.push(addThing),
    })    
    this.showTodoList();
  }

  //그룹 추가할 때 사용할 거
  addGroup(groupName){
    this.setState({
      groupList: this.state.groupList.push(groupName),
      //group : groupName
    })
    //이걸 안하면 에러 발생. 흐름이 정확히 어떻게 되는건지?
    this.showTodoList();
  }

  //현재 그룹 선택하는 거
  selectCurrentGroup(selectedGroup){
    this.setState({
      currentGroup : selectedGroup,
    })
    console.log('선택된 그룹은 : ', selectedGroup)
  }

  //todoList에 전달할 거... 배열은 이거 해줘야되고, 배열 아닌건 안해줘도됨..??????????
  showTodoList(){
    this.setState({
      todoList: this.state.todoList,
      groupList: this.state.groupList,
      currentGroup : this.state.currentState,
      darkMode: this.state.darkMode,
    })
    //console.log(this.state)
  }
  

  render() {
    return (
      <div>
        <CreateNew init = {this.init}/>
        <TodoList currentState = {this.state}/>
        <GroupList 
        currentState = {this.state}
        selectCurrentGroup = {this.selectCurrentGroup}
        />
        <GroupAdd addGroup = {this.addGroup}/>
        <WriteTodoThing addTodoThing = {this.addTodoThing}/>
      </div>
    )
  }
}

export default App;