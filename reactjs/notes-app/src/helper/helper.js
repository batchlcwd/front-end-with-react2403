export const noteStatus = {
  0: "New",
  1: "In Progress",
  2: "Completed",
  3: "On Hold",
  4: "Canceled",
  5: "Rejected",
  6: "Done",
};

//note loal Storage Functions
export const noteLocalFun = {
  saveArray: (array) => {
    localStorage.setItem("noteArray", JSON.stringify(array));
  },
  getArray: () => {
    const arr = localStorage.getItem("noteArray") | [];
    return JSON.parse(arr);
  },
  clear: () => {
    localStorage.removeItem("noteArray");
  },
};
