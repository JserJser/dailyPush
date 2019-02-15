function FriendStatusWithCounter(props){
    const [count,setCount]=useState(0);
    useEffect(()=>{
        document.title=`${count}`;
    })
    const [isOnline,setIsOnline]=useState(null);
    useEffect(()=>{
        ChatAPI.subscribeToFriendStatus(props.friend.id,handleStatusChange);
        return()=>{
            ChatAPI.unsubscribeFromFriendStatus(props.friend,handleStatusChange);
        }
    });
    function handleStatusChange(status){
        setIsOnline(status.isOnline);
    }
}