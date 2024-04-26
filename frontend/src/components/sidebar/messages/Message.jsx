
const Message = ({ message }) => {
    // const { authUser } = useAuthContext();
    // const { selectedConversation } = useConversation();
    // const fromMe = message.senderId === authUser._id;
    // const formattedTime = extractTime(message.createdAt);
    // const chatClassName = fromMe ? "chat-end" : "chat-start";
    // const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
    // const bubbleBgColor = fromMe ? "bg-blue-500" : "";

    // const shakeClass = message.shouldShake ? "shake" : "";

    return (
        <div className="chat chat-end">
            <div className='chat-image avatar'>
                <div className='w-10 rounded-full'>
                    <img alt='Tailwind CSS chat bubble component' src="https://cdn0.iconfinder.com/data/icons/cryptocurrency-137/128/1_profile_user_avatar_account_person-132-512.png" />
                </div>
            </div>
            <div className={`chat-bubble text-white  pb-2`}>{"HAI AKU GILANG"}</div>
            <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>{"12.30"}</div>
        </div>
    );
};
export default Message;