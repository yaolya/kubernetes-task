import { useEffect, useState } from 'react'
import './App.css';

function App() {
  const [messages, setMessages] = useState([])
  useEffect(() => {
    fetch(process.env.REACT_APP_BACKEND_API_URL)
        .then(res => res.json())
        .then(data => setMessages(data))
  }, [])
    function createMessage() {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: '' })
        };
        fetch(process.env.REACT_APP_BACKEND_API_URL, requestOptions)
            .then(res => res.json())
            .then(data => setMessages([...messages, data]))
    }
    function deleteMessages() {
        const requestOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: '' })
        };
        fetch(process.env.REACT_APP_BACKEND_API_URL, requestOptions)
            .then(res => res.json())
            .then(data => setMessages([data]))
    }
  return (
      <div className="App">
        <header className="App-header">
          <h1>messages from backend:</h1>
            <div><button onClick={createMessage}>create</button><button onClick={deleteMessages}>delete all</button></div>
          {messages && messages.map(message => (
              <div key={message.id}>{message.title}</div>
          ))}
        </header>
      </div>
  );
}
export default App;