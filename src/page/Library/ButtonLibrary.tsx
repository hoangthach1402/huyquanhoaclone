import React from 'react'
import Button from '../../components/Button'

const ButtonLibrary: React.FC = () => {
  return (
    <div>
      <div>
          <div className='my-2'>

          <Button onClick={() => alert('Primary large button clicked!')} color='primary' size='large'>
              Primary Large Button
          </Button>
          </div>

        <div className='my-2'>
          <Button onClick={() => alert('Primary small button clicked!')} color='secondary' size='small'>
              Primary Small Button
          </Button>
        </div>
          <div className='my-2'>

          <Button onClick={() => alert('Secondary large button clicked!')} color='secondary' size='large'>
              Secondary Large Button
          </Button>
          </div>

          <div className='my-2'>
          <Button onClick={() => alert('Secondary small button clicked!')} color='primary' size='small'>
              Secondary Small Button
          </Button>
          </div>
          <div className="my-2">
            <Button onClick={()=>console.log('onclick')} color='primary' size='small'>small</Button></div>
      </div>
    </div>
  )
}

export default ButtonLibrary
