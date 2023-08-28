import { Fragment } from "react"
import config from './ChatBot/config';
import MessageParser from './ChatBot/MessageParser';
import ActionProvider from './ChatBot/ActionProvider';
import Chatbot from "react-chatbot-kit";
import 'react-chatbot-kit/build/main.css'

const Page2 = () =>{
    return (
      <Fragment>
        <Chatbot
          config={config}
          messageParser={MessageParser}
          actionProvider={ActionProvider}
        />
      </Fragment>
    );
}

export default Page2;