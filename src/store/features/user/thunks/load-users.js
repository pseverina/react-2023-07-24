import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectUserIds } from "../selectors";

export const loadUsersIfNotExist = createAsyncThunk(
  "users/loadUsersIfNotExist",
  async () => {
    const response = await fetch(`http://localhost:3001/api/users/`);

    return await response.json();
  },
  {
    condition: (_, { getState }) => !selectUserIds(getState())?.length,
  }
);
