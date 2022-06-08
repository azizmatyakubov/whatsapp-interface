import {io}from"socket.io-client"
import { useState ,useEffect} from "react";

const ADDRESS = 'http://localhost:3030'
const socket = io(ADDRESS, { transports: ['websocket'] })


interface Message {
    text: string
    sender: string
    id: string
    timestamp: number // the number of elapsed ms after 1/1/1970
  }

const SocketTry = () => {
    const [chatHistory, setChatHistory] = useState<Message[]>([])
    const [newMessage, setNewMessage] = useState('')
    const [loggedIn, setLoggedIn] = useState(false)



    useEffect(
        () => {
          socket.on('connect', () => {
            console.log('connection with the server established!')
          })
    
          // the 'loggedin' event comes from the server when my username has been added
          // to the online users list correctly
          socket.on('loggedin', () => {
            // now I'm officially logged in!
            console.log(
              "the username has been sent successfully and now you're logged in!"
            )
            setLoggedIn(true)
            // newConnection is an event sent automatically from the server
            // to all the clients that are ALREADY loggedin when a new user
            // logs in on its own
            socket.on('newConnection', () => {
              console.log('a new client just connected!')
            })
            socket.on('message', (messageFromAnotherClient: Message) => {
              // this is for a connected client who receives a message from another user!
              // let's retrieve the message from the event and append it to chatHistory
              // setChatHistory([...chatHistory, messageFromAnotherClient]) // <-- this is a buggy line of code.
              // because this socket.on event listener is set-up just ONCE, in the beginning of the lifecycle,
              // chatHistory is NEVER re-evaluated! we need to evaluate chatHistory BEFORE appending our new message
              setChatHistory((currentChatHistory) => [
                ...currentChatHistory,
                messageFromAnotherClient,
              ]) // <-- this is a buggy line of code.
            })
            // newConnection works, but this should be enabled JUST when a user has already logged in!
          })
        },
        [
          // empty pair of brackets here because ALL my event listeners have to be set up
          // just once!
        ]
      )


    return
}

export default SocketTry