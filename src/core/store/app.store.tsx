import { create } from "zustand";

interface DataStateType {
  data: number;
  setData: (data: number) => void;
}

const useDataStore = create<DataStateType>()((set) => ({
  data: 0,
  setData: (data: number) => set((state) => ({ ...state, data })),
}));

export default useDataStore;
