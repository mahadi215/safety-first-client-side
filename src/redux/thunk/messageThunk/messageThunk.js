import { toast } from "react-hot-toast";
import { addmsg, loadmsg } from "../../Actions/SubscribeAction";


export const addMessageData = (messageData) => {
    return async(dispatch, getState)=>{
        const res = await fetch('http://localhost:5000/addMessage',{
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(messageData),

        });
        const data = await res.json();
        if(data.acknowledged){
            dispatch(addmsg(data))
            // alert()
            toast.success('Your Message send Succesfull')
            document.getElementById('contact-form').reset()
        }
};
};

export const getMessageData = ()=>{
  
    return async(dispatch, getState)=>{
        try {
            const res = await fetch('http://localhost:5000/getMessage',{
                headers: {
                    authorization: `bearer ${localStorage.getItem('safe-token')}`
                }
            });
            const data = await res.json()
            console.log(data);

            if(data.length){
                dispatch(loadmsg(data))
            }
        } catch (error) {
           
        }
    }
}
