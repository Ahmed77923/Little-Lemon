import { updateTimes } from "./bookingReducer";

describe("updateTimes reducer", () => {
  test("returns new times when UPDATE action is dispatched", () => {
    const initialState = ["17:00", "18:00"];
    const action = { type: "UPDATE", date: "2025-08-20" };
    const newState = updateTimes(initialState, action);

    expect(newState).toEqual(["17:00", "18:00", "19:00", "20:00", "21:00"]);
  });

  test("returns same state for unknown action type", () => {
    const initialState = ["17:00", "18:00"];
    const action = { type: "UNKNOWN" };
    const newState = updateTimes(initialState, action);

    expect(newState).toEqual(initialState);
  });
});
