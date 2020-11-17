import React from 'react'

export const ChooseImage = (props) => {
  const { handleImageUpload } = props;
  return (
      <form onSubmit={(e)=>this._handleSubmit(e)}>
        <input className="fileInput" 
          type="file" 
          onChange={handleImageUpload} />
      </form>
  )
}
