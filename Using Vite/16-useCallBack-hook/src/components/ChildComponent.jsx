import React from 'react'

const childComponent = React.memo(
    (props) => {
        return (
          <div>
            <button onClick={props.handleClcik}>
              {props.buttonName}
            </button>
          </div>
        )
      }
); 

export default childComponent
