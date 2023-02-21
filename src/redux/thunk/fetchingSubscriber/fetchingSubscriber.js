import { loadSubscriber } from "../../Actions/SubscribeAction";

export const fetchingSubscriber = ()=>{
  
    return async(dispatch, getState)=>{
        try {
            const res = await fetch('http://localhost:5000/getSubscriber',{
                headers: {
                    authorization: `bearer ${localStorage.getItem('safe-token')}`
                }
            })
            const data = await res.json()
            console.log(data);

            if(data.length){
                dispatch(loadSubscriber(data))
            }
        } catch (error) {
           
        }
    }
}
export default fetchingSubscriber;