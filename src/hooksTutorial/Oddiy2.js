import React, { useEffect, useState } from "react";

export default function Oddiy2() {
  const [count, setCount] = useState(0);
  const [infosType, setInfosType] = useState('posts');

  // useEffect(() =>{
  //     document.title = `Siz ${count} marta bosdinggiz!`
  // })

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${infosType}`)
      .then((response) => response.json())
      .then((json) => console.log(json));
  });

  return (
    <div>
      <button onClick={() => setInfosType('users')}>Users</button>
      <button onClick={() => setInfosType('comments')}>Comments</button>
      <button onClick={() => setInfosType('todos')}>Todos</button>
    </div>
  );
}
