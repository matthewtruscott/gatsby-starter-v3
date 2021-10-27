import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"

const BASE_URL = "https://jsonplaceholder.typicode.com"

export const GetTodos = createAsyncThunk(
  "todo/getTodos",
  async () => await (await axios.get(`${BASE_URL}/todos`)).data
)

export const CreateTodo = createAsyncThunk(
  "todo/createTodo",
  async todo => await (await axios.post(`${BASE_URL}/todo`, todo)).data
)

export const DeleteTodo = createAsyncThunk(
  "todo/deleteTodo",
  async todo => await (await axios.post(`${BASE_URL}/todo`, todo)).data
)
