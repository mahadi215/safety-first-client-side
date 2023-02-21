import { toast } from "react-hot-toast";
import { addSubscribe } from "../../Actions/SubscribeAction";


const addSubscriberData = (email) => {
    return async(dispatch, getState)=>{
        const res = await fetch('http://localhost:5000/addSubscriber',{
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(email),

        });
        const data =await res.json();
        if(data.acknowledged){
            dispatch(addSubscribe(email))
            document.getElementById('subscriber-form').reset()
            toast.success('Your Subscribe Succesfull')
        }
};
};

export default addSubscriberData;