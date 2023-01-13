import React from 'react'
import fileupload from '../assets/fileupload.jpg';
import { useRef, useState } from 'react';

const Main = () => {

//text 1 and text 2 with three paragraphs of popualated text
const text1 =  `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo esse unde labore. Quidem, illum nisi. Veniam quibusdam sint quae ipsam.\n
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum vel quibusdam aliquam cumque repellendus tempore tempora illo, reiciendis corrupti doloremque quia excepturi tenetur provident quae?\n
Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, totam?`;

const text2 =  `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo esse unde labore. Quidem, illum nisi. Veniam quibusdam sint quae ipsam.\n
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum vel quibusdam aliquam cumque repellendus tempore tempora illo, reiciendis corrupti doloremque quia excepturi tenetur provident quae?\n
Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, totam?`;

//useState for textarea 1 and textarea 2 with three paragraphs of populated text
    const [value1, setValue1] = useState(text1);
    const [value2, setValue2] = useState(text2);

//function for setting text in text area 1 and storing it in localStorage (to avoid refresh)
    const handleChange1 = (e) => { 
        setValue1(e.target.value1)
        localStorage.setItem("value1",(e.target.value));
      } 

//function for setting text in text area 2 and storing it in localStorage (to avoid refresh)
    const handleChange2 = (e) => {
        setValue2(e.target.value2)
        localStorage.setItem("value2",(e.target.value));
    }

//useEffect which receives text from localStorage when the page refreshes
    React.useEffect (() => {
         const data1 = localStorage.getItem("value1");
         const data2 = localStorage.getItem("value2");
        //if no text is stored in localStorage don't set the text 
        if(data1 || data2) {
            setValue1(data1);
            setValue2(data2);
        }
    }, []);

//useState and useRef for storing and displaying the image
    const [img, setImg] = useState(null);
    const fileInput = useRef(null); 
  
//function which 
    const handleUpload = (e) => {
        const uploaded = e.target.files;
        setImg(URL.createObjectURL(new Blob(uploaded)));
        localStorage.setItem('img', URL.createObjectURL(new Blob(uploaded)));
        document.getElementById("format").style.display = "none";
        document.getElementById("fileimage").style.display = "none"; 
        document.getElementById("reset").style.display = "block";   
    }

//useEffect which receives the image from localStorage and displays it when the page refreshes, hides any previous information and adds a reset button
    React.useEffect (() => {
        const image = (localStorage.getItem('img'));
        //if no image is stored in localStorage, don't set the image
        if (image){
            setImg(image);
            //hides everything but the image and reset button
            document.getElementById("format").style.display = "none";
            document.getElementById("fileimage").style.display = "none"; 
            document.getElementById("reset").style.display = "block"; 
            document.getElementById("fileupload").style.padding = "0px 40px"; 
        }
   });

//reset button which removes the image from localStorage
   const reset = () => {
    localStorage.removeItem('img');
   }

//return statement
  return (
    <div className='Main'>
        {/* the left side of the page (uploads the image) */}
        <section>
            <form>
                <div id = "fileupload">
                {/* image upload icon  */}
                <label htmlFor="file-input">
                    <img id="fileimage" src={fileupload} alt="file upload image"/>
                </label>
                {/* input that takes the image */}
                <input accept ="image/*" onChange = {handleUpload} ref={fileInput} id="file-input" type="file" />
                <p id="format">PNG, JPEG files only</p>
                {/* this is the new image that is displayed */}
                {img !=null && <img src={img} id="img" alt="an image is not available"/> } 
                </div>
                {/* reset button */}
                <button id ="reset" onClick={reset}>Reset Image</button>
            </form>
        </section>
        {/* the  right side of the page which has the text areas */}
        <section id = "textbox">
            <form>
                {/* textarea 1 */}
                <div>  
                    <label htmlFor="textarea1">Text Box</label>
                    <textarea name="textarea1" value={value1} onChange={handleChange1} id="textarea1" cols="50" rows="10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis velit sunt praesentium. Repellat ea, harum corporis animi molestiae reiciendis laborum.</textarea>
                </div>
            </form>
                {/* textarea 2 */}
                <div>
                    <label htmlFor="textarea2">Text Box</label>
                    <textarea name="textarea1" value={value2} onChange={handleChange2} id="textarea2" cols="50" rows="10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus omnis tempora fugit accusantium est, nostrum fuga soluta dolor magni eos?</textarea>             
                </div>        
        </section>
    </div>
  )
}

export default Main