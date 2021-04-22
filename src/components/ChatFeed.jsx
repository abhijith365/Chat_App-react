import MessageForm from 'MessageForm';
import MyMessage from 'MyMessage';
import TheirMessage from 'TheirMessage';


const ChatFeed = (props) => {
    const { chats, activeChat, userName, messages } = props;

    console.log(props)
    return (
        <div>
            Chat feed
        </div>
    );
}

export default ChatFeed;