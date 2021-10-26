import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"

const BASE_URL = "https://jsonplaceholder.typicode.com"

export const GetTodos = createAsyncThunk(
  "post/getTodos",
  async () => await await (await axios.get(`${BASE_URL}/todos`)).data
)

export const CreateTodo = createAsyncThunk(
  "post/createTodo",
  async todo => await (await axios.post(`${BASE_URL}/todo`, todo)).data
)

export const DeleteTodo = createAsyncThunk(
  "post/deleteTodo",
  async todo => await (await axios.post(`${BASE_URL}/todo`, todo)).data
)
