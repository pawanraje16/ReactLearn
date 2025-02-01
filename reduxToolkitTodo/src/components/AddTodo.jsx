import React ,{ useState} from 'react'
import {useDispatch} from 'react-redux'
import {addTodo} from '../features/todo/todoSlice'
function AddTodo() {

    const [input, setInput]=useState('')
    const dispatch=useDispatch()

    const addTodoHandler=(e)=>{
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }

    return (
        <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
          <input
            type="text"
            className="bg-gray-800 rounded-lg border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition duration-200 ease-in-out"
            placeholder="Enter a Todo..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            type="submit"
            className="bg-blue-500 text-black bg-indigo-600 focus:outline-none border border-indigo-500 py-2 px-6 rounded-lg text-lg transition duration-200 ease-in-out"


          >
            Add Todo
          </button>
        </form>
      )
}

export default AddTodo