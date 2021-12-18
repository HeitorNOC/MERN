import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import './App.css';
import Home from './pages/Home'
import Chats from './pages/Chats'
import ChatScreen from './pages/ChatScreen'

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/chat/:person" element={<ChatScreen />}>
          </Route>
          <Route path="/chat" element={<Chats />}>
          </Route> 
          <Route path="/" element={<Home />}>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App
