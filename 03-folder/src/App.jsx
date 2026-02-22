import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>
        <Card user='Vishal' age={21} img='https://images.unsplash.com/photo-1769863467291-23cf7902f686?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDU2fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D/'/>
        <Card user='Rohit' age={18} img='https://plus.unsplash.com/premium_photo-1767943943590-772eeaca333d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDk0fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D'/>
        <Card user='Neha' age={16} img='https://images.unsplash.com/photo-1770701195265-8af0dc148446?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDl8Q0R3dXdYSkFiRXd8fGVufDB8fHx8fA%3D%3D' />
        <Card user='Rohitakash' age={14} img='https://images.unsplash.com/photo-1770723963417-f661f0396c7e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEyfENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D' />
        <Card user='Ayushi (kalu)' age={10} img='https://plus.unsplash.com/premium_photo-1769370658708-92ce07cd18a8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE0fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D' />
    </div>
  )
}

export default App
