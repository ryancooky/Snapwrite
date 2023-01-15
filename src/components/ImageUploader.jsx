import React from 'react'

const ImageUploader = (props) => {
  return (
    <form>
        <div id = "fileupload">
        {/* image upload icon  */}
        <label htmlFor="file-input">
            <img id="fileimage" src={props.fileupload} alt="file upload image"/>
        </label>
        {/* input that takes the image */}
        <input accept ="image/*" onChange = {props.handleUpload} id="file-input" type="file" />
        <p id="format">PNG, JPEG files only</p>
        {/* this is the new image that is displayed */}
        {props.img !=null && <img src={props.img} id="img" alt="an image is not available"/> } 
        </div>
        {/* reset button */}
        <button id ="reset" onClick={props.reset}>Reset Image</button>
    </form>
  )
}

export default ImageUploader