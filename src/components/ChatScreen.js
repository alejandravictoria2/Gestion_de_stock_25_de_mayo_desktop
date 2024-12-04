import React, { useState, useEffect } from 'react';
import { getFirestore, collection, query, orderBy, onSnapshot, addDoc, serverTimestamp } from 'firebase/firestore';
import './ChatScreen.css'; // Archivo CSS para estilos
import firebaseApp from '../firebase'; // Archivo de configuración de Firebase

const ChatScreen = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const firestore = getFirestore(firebaseApp);

  useEffect(() => {
    const messagesCollection = collection(firestore, 'messages');
    const q = query(messagesCollection, orderBy('createdAt', 'desc'));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const messagesData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setMessages(messagesData);
    });

    return unsubscribe;
  }, [firestore]);

  const handleSend = async () => {
    if (message.trim()) {
      const messagesCollection = collection(firestore, 'messages');
      await addDoc(messagesCollection, {
        text: message,
        createdAt: serverTimestamp(),
      });
      setMessage('');
    }
  };

  return (
    <div className="chat-container">
      <div className="messages-container">
        {messages.map((msg) => (
          <div key={msg.id} className="message">
            <span>{msg.text}</span>
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          className="input"
          placeholder="Escribe un mensaje..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button className="send-button" onClick={handleSend}>
          Enviar
        </button>
      </div>
    </div>
  );
};

export default ChatScreen;
