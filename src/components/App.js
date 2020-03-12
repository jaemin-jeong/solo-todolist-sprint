import React from 'react';
import CreateNew from './CreateNew'
import GroupList from './GroupList'
import WriteTodoThing from './WriteTodoThing'
import TodoList from './TodoList'
import GroupAdd from './GroupAdd'
import PreviousTodoList from './PreviousTodoList'

class App extends React.Component {
  // state: todoList, groupList, darkMode,
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
      groupList: ['그룹 미지정'],
      currentGroup: '그룹 미지정',
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
    this.deleteGroup = this.deleteGroup.bind(this);
    this.deleteTodoThing = this.deleteTodoThing.bind(this);
  }

  //새로운 todo list 만들기
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

  //todoThing 삭제
  deleteTodoThing(target) {
    this.setState({
      todoList: this.state.todoList.filter(thing => thing !== target),
    })
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

  //현재 그룹 선택
  selectCurrentGroup(selectedGroup) {
    this.setState({
      currentGroup: selectedGroup,
    })
    console.log('선택된 그룹은 : ', selectedGroup)
  }

  //그룹 삭제
  deleteGroup(target) {
    this.setState({
      groupList: this.state.groupList.filter(group => group !== target),
    })
  }



  componentDidMount() {
    console.log('----------------------------------')
    console.log('componentDidMount 했습니다~')
    console.log('this.save는 ', this.save)
    console.log('this.saveArr는 ', this.saveArr)
    console.log('----------------------------------')
  }

  componentDidUpdate() {
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
        <TodoList 
        currentState={this.state} 
        deleteTodoThing = {this.deleteTodoThing}  
        />
        <PreviousTodoList />
        <GroupList
          currentState={this.state}
          selectCurrentGroup={this.selectCurrentGroup}
          deleteGroup={this.deleteGroup}
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