import React, { Component } from 'react'
import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

export default class Todo extends Component 
{
    /**
     * Constructor
     * @param {*} props 
     */
    constructor(props) {
        super(props)

        this.state = {description: '', list: []}
        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
    }
    /**
     * Altera o valor na classe. 
     * Pega o valor do input
     * @param {*} e 
     */
    handleChange(e) {
        this.setState({...this.state, description: e.target.value})
    }
    /**
     * Insere um registro
     */
    handleAdd() {
        console.log(this.state.description)
    }
    /**
     * Render
     */
    render() {
        return (
            <div>
                <PageHeader name='Todo' small='Cadastro'></PageHeader>

                <TodoForm 
                    handleAdd={this.handleAdd} 
                    handleChange={this.handleChange}
                    description={this.state.description}
                />
                {/*<TodoList />*/}
            </div>
        )
    }
}