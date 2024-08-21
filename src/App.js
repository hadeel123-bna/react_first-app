import React, { Component } from "react";
import TodoItem from './component/TotdoItem/TodoItem'
import AddItem from './component/addItem/add'

class App extends Component {
  state = {
    items : [
      {id: 1, name: "hadil", age: "21"},
      {id: 2, name: "basma", age: "47"},
      {id: 3, name: "mohamed", age: "52"}
    ]
  }
 deletItem = (id) => {
   let items = this.state.items.filter(item => {
  return item.id !== id
});
this.setState({items})
 }
addItem = (item) =>{
  item.id = Math.random()
  let items = this.state.items
  items.push(item);
  this.setState({items})
}

  render() {
    return (
      <div className="App">
        <h1 className="text">Todo Liste Application</h1>
        <TodoItem items={this.state.items}  deletItem={this.deletItem}/>
        <AddItem addItem={this.addItem} />
      </div>
    );
  }
}

export default App;

