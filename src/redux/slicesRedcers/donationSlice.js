import { createSlice } from '@reduxjs/toolkit'


const donationSlice = createSlice({
    name:"donation",
    initialState:{
        donations:[],
        loading:false,
        detail:{},
        pagination:{
            skip:1,
            limit:5,
            sort:"id"
        }
    },
    reducers:{
        setDonations: (state, action) => {

        },
        actionNext : (state, action) => {

        },
        actionPrev : (state,action) => {

        }
    }

})

//exportamos las actions reducer
export const { setDonations,actionNext,actionPrev } = donationSlice.actions


//exportamos los estados
export const donations = (state) => state.donation.donations

const reducer =  donationSlice.reducer

export default reducer