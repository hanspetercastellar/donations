import { createSlice } from '@reduxjs/toolkit'

const data = [
    {
        "id": 2,
        "first_name": "Galvan",
        "last_name": "Stollman",
        "donations": 401,
        "total": 194510.37,
        "image": "https://robohash.org/impeditnostrumquas.png?size=50x50&set=set1",
        "description": "Age-rel osteopor w crnt path fx, l shldr, 7thD"
    },
    {
        "id": 3,
        "first_name": "Estella",
        "last_name": "Tomlinson",
        "donations": 466,
        "total": 55645.7,
        "image": "https://robohash.org/voluptasetut.png?size=50x50&set=set1",
        "description": "Interstitial myositis, left upper arm"
    },
    {
        "id": 4,
        "first_name": "Tadeas",
        "last_name": "Janse",
        "donations": 720,
        "total": 731240.97,
        "image": "https://robohash.org/quasofficiismaiores.png?size=50x50&set=set1",
        "description": "Complete traumatic amputation of one left lesser toe, subs"
    },
    {
        "id": 5,
        "first_name": "Fawne",
        "last_name": "Willmott",
        "donations": 768,
        "total": 271184.58,
        "image": "https://robohash.org/atqueconsectetursed.png?size=50x50&set=set1",
        "description": "Dislocation of oth prt right shoulder girdle, init encntr"
    },
    {
        "id": 6,
        "first_name": "Toma",
        "last_name": "Loveman",
        "donations": 754,
        "total": 182080,
        "image": "https://robohash.org/doloremnamincidunt.png?size=50x50&set=set1",
        "description": "Sprain of lateral collateral ligament of unsp knee, subs"
    }
]

const donationSlice = createSlice({
    name:"donation",
    initialState:{
        donations:data,
        loading:false,
        detail:{
            "id": null,
            "first_name": "",
            "last_name": "",
            "donations": null,
            "total": null,
            "image": "",
            "description": ""
        },
        lastDonation:{
          amount:0,
          idDonation:null
        },
        pagination:{
            skip:1,
            limit:5,
            sort:"id"
        }
    },
    reducers:{
        setDonations: (state, action) => {
            state.donations = action.payload
        },
        setDetail : (state, action) => {
            const idDonation = action.payload;
            state.detail = state.donations.find((donation) => donation.id == idDonation)
            state.lastDonation={
                amount:0,
                idDonation:null
            }
        },
        saveDonation: (state, action) => {
            const { id, amount } = action.payload;

            state.donations.map(donation => {
                if(donation.id == id){
                    donation.donations = donation.donations + 1
                    donation.total = donation.total + parseInt(amount);
                }
            })
            state.lastDonation ={
                amount:amount,
                idDonation:id
            }
            state.detail = state.donations.find((donation) => donation.id == id)
        },
        deleteDonation: (state,action) => {

            const { amount, idDonation} = state.lastDonation
            state.donations.map(donation => {
                if(donation.id == idDonation){
                    donation.donations = donation.donations - 1
                    donation.total = donation.total - parseInt(amount);
                }
            })

            state.lastDonation={
                amount:0,
                idDonation:null
            }
            state.detail = state.donations.find((donation) => donation.id == idDonation)
        }
    }

})

//exportamos las actions reducer
export const { setDonations,actionNext,actionPrev, setDetail,saveDonation,deleteDonation } = donationSlice.actions

//exportamos las constantes para las acciones sagas
export const identifier = {
    FETCH_DONATION:"FETCH_DONATION",
    FETCH_ONE:"FETCH_ONE"
}

//exportamos los estados
export const donations = (state) => state.donation.donations

const reducer =  donationSlice.reducer

export default reducer