import React, { Component } from 'react'
import axios from 'axios'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

const URL = "http://localhost:3003/api/todos"

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
        this.handleRemove = this.handleRemove.bind(this)
        this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
        this.handleMarkAsPending = this.handleMarkAsPending.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.handleClear = this.handleClear.bind(this)

        this.refresh()
    }
    refresh(description = "") {
        
        const search = description ? `&description__regex=/${description}/` : ''

        axios.get(`${URL}?sort=-createdAt${search}`)
        .then((res) => {
            this.setState({...this.state, description, list:res.data})
        })
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
        var description = this.state.description
        axios.post(URL, { description })
            .then((res) => {
                console.log(res)
                this.refresh()
            })
    }
    /**
     * Remove um objeto
     * @param {*} todo 
     */
    handleRemove(todo) {
        axios.delete(`${URL}/${todo._id}`)
        .then((res) => {
            console.log(res)
            this.refresh(this.state.description)
        })
    }
    /**
     * Marca um item como concluido
     * @param {*} todo 
     */
    handleMarkAsDone(todo) {
        axios.put(`${URL}/${todo._id}`, { ...todo, done:true})
        .then((res) => {
            console.log(res)
            this.refresh(this.state.description)
        })
    }
    /**
     * Marca um item como pendendte
     * @param {*} todo 
     */
    handleMarkAsPending(todo) {
        axios.put(`${URL}/${todo._id}`, { ...todo, done:false})
        .then((res) => {
            console.log(res)
            this.refresh(this.state.description)
        })        
    }
    /**
     * Faz uma busca a partir do valor digitado no campo Descrição
     */
    handleSearch() {
        this.refresh(this.state.description)
    }
    /**
     * Limpa o form
     */
    handleClear() {
        this.refresh()
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
                    handleClear={this.handleClear}
                    handleSearch={this.handleSearch}
                    description={this.state.description}
                />
                
                <TodoList 
                    list={this.state.list}
                    handleRemove={this.handleRemove}
                    handleMarkAsDone={this.handleMarkAsDone}
                    handleMarkAsPending={this.handleMarkAsPending}
                />

            </div>
        )
    }
}