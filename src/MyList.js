import React, {Component} from 'react'
import ListItem from './ListItem'
export default class MyList extends Component{
  state = {
    taskArray: this.props.theList,
    newItem: ''
  }
  
  clearList = ()=>{
    console.log('hi')
    this.setState({
      taskArray: []
    })
  }
  handleChange=(e)=>{
    console.log(e)
    this.setState({
      newItem:e.target.value
    })
  }
  addItem=(e)=>{
    e.preventDefault()
    this.setState(prevState=>{
      // const newTask= prevState.newItem
      console.log(prevState.newItem)
      return{
        taskArray: [...prevState.taskArray, prevState.newItem],
        newItem: ''
      }
    })
  }
  render(){
    let todoItems = this.state.taskArray.map((item,idx)=>{
      return (      
      <ListItem 
      task={item} key={idx}
      />
    )
    })
    return(
      <div>
        <h1>Things I should stop procrastinating</h1>
        <ul>
          {todoItems}
        </ul>
        <button onClick={this.clearList}>Finished the List</button>
        <form onSubmit={this.addItem}>
          <input 
            type='text'
            onChange={this.handleChange}
            value={this.state.newItem}
          />
          <button type='submit'>Add it</button>
        </form>
      </div>
    )
  }
}