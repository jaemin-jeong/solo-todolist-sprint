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
      groupList: [],
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
    this.selectCurrentGroup = this.selectCurrentGroup.bind(this);
  }

  //CreateNew를 클릭하면 실행되는 함수
  init() {
    this.save[this.state.currentGroup] = this.state.todoList;
    this.saveArr.push(JSON.stringify(this.save));
    this.setState({
      todoList: [],
    })
    console.log('saveArr : ', this.saveArr);
    console.log('save : ', this.save);
  }


  addTodoThing(addThing) {
    console.log('받은 addThing은 : ', addThing);
    this.setState({
      todoList: this.state.todoList.concat(addThing),
    })
  }

  //그룹 추가할 때 사용할 거
  addGroup(groupName) {
    this.setState({
      //groupList: this.state.groupList.push(groupName) <-- 이렇게 하면 안됨
      //push를 하면 state값을 직접적으로 바꿔주는게 되어버리기 때문에, immutable한 메소드를 사용해야됨.
      //참고: https://blog.naver.com/PostView.nhn?blogId=backsajang420&logNo=221353506054&redirect=Dlog&widgetTypeCall=true&directAccess=false
      groupList: this.state.groupList.concat(groupName),
    })
  }

  //그룹 선택하는 거
  selectCurrentGroup(selectedGroup) {
    this.setState({
      currentGroup: selectedGroup,
    })
    console.log('선택된 그룹은 : ', selectedGroup)
  }


  componentDidMount(){
    console.log('----------------------------------')
    console.log('componentDidMount 했습니다~')
    console.log('this.save는 ', this.save)
    console.log('this.saveArr는 ', this.saveArr)
    console.log('----------------------------------')
  }

  componentDidUpdate(){
    console.log('----------------------------------')
    console.log('componentDidUpdate 했습니다!')
    console.log('this.save는 ', this.save)
    console.log('this.saveArr는 ', this.saveArr)
    console.log('----------------------------------')
  }

  render() {
    return (
      <div>
        <CreateNew init={this.init} />
        <TodoList currentState={this.state} />
        <GroupList
          currentState={this.state}
          selectCurrentGroup={this.selectCurrentGroup}
        />
        <GroupAdd addGroup={this.addGroup} />
        <WriteTodoThing
          addTodoThing={this.addTodoThing}
          currentState={this.state}
        />
      </div>
    )
  }
}

export default App;