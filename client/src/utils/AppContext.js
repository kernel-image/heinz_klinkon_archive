import { createContext } from "react";

export const AppContext = createContext({
    results: [],
    error: null,
    searching: false,
    selectedResult: null,
    setSelectedResult: () => {},
    search: "",
    setSearch: () => {},
    selectedClass: false,
    setSelectedClass: () => {},
    contentVisible: true,
    setContentVisible: () => {}
  });