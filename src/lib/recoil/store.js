import { atom, selector } from "recoil";

// Define an atom
export const counterState = atom({
  key: "counterState", // Unique key
  default: 0,         // Default value
});

// Define a selector (derived state)
export const doubleCounterState = selector({
  key: "doubleCounterState",
  get: ({ get }) => {
    const count = get(counterState);
    return count * 2;
  },
});
