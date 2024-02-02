import React from 'react'

export default function ConditionalRendering(props) {
    const IsEven = props => {
        if (number % 2 === 0) {
          return <h1> It is even </h1>
        } else {
          return <h1>It is odd</h1>
        }
      }
}

return (
    <div> ConditionalRendering
        {(IsEven(props.number))}
        {(IsEven(13))}
        {(IsEven(121345361))}
    </div>
)
