import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';


import './App.css';




const App = () => {
    return (
        <ChatEngine
            height="100vh"
            projectID="2ede3048-e0c5-4d5a-80a8-4c2d39a03973"
            userName="abhijith365"
            userSecret="108108108"
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />

    );
}

export default App;