import React, { useState } from 'react'

export { Counter }

function Counter() {
  const [count, setCount] = useState(0)
  return (
    <button className="btn btn-accent btn-outline" type="button" onClick={() => setCount((count) => count + 1)}>
      Counter {count}
    </button>
  )
}
