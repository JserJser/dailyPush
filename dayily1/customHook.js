import {useState,useEffect} from 'react'
function useFriendStatus(friendID){
    const [isOnline,setIsOnline]=useState(null);
    function handleStatusChange(status){
        setIsOnline(status.isOnline);
    }
    useEffect(()=>{
        ChatAPI.subscribeToFrinedStatus(friendID,handleStatusChange);
        return ()=>{
            ChatAPI.unsubscribeFromFriendStatus(friendID,handleStatusChange);
        }
    });
    return isOnline;
}