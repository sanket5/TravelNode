
import { createSlice } from '@reduxjs/toolkit'


export const places = createSlice({
    name: 'places',
    initialState: {
        list: [],
        selected: null,
        selectedItem: null
    },
    reducers: {
        setSelectedPlace: (state, action) => {
            state.selected = action.payload || null
        },
        setAllPlaces: (state, action) => {
            state.list = action.payload || []
        },
        setSelectedItem: (state, action) => {
            state.selectedItem = action.payload || null
        }
    }
})
export const { setSelectedPlace, setAllPlaces, setSelectedItem } = places.actions
export default places.reducer