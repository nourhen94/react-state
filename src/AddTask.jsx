import React, { Component } from 'react'

export default class Addtask extends Component {
    state={
        newtext: "",
    }
    handleChange=(e)=>this.setState({newtext:e.target.value})
    handleSubmit=(e)=>{
        e.preventDefault();
        this.state.newtext===""? alert('please fill the input')
     : this.props.add(this.state.newtext)
        this.setState({newtext:""})
    }
    render() {
        return (
            <div>
                <h1> Our to do app</h1>
                <form onSubmit ={this.handleSubmit}  > <input type="text" value={this.state.newtext} onChange={this.handleChange}/>
                <button type='submit'>Add</button>
                </form>
                
            </div>
        )
    }
}
