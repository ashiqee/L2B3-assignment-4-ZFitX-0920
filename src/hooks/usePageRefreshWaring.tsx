import { useEffect } from "react";

const usePageRefreshWaring = (warning:boolean,message:string) => {
    useEffect(()=>{
        if(!warning){
            return;
        }

        const handleBeforeUnload =(event:BeforeUnloadEvent)=>{
            event.preventDefault()
           event.returnValue = message;
            return message;
        };

        window.addEventListener('beforeunload',handleBeforeUnload);
        return () => {
            window.removeEventListener('beforeunload',handleBeforeUnload);
        };

    },[warning,message])
 
};

export default usePageRefreshWaring;