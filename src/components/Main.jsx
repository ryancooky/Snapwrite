import React from 'react'
import fileupload from '../assets/fileupload.jpg';
import { useRef, useState } from 'react';
import Textbox from './Textbox';
import ImageUploader from './ImageUploader';

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
    const handleChange = (e, key, setter) => { 
        setter(e.target.value)
        localStorage.setItem(`value${key}`,(e.target.value));
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
        < ImageUploader fileupload = {fileupload} reset = {reset} handleUpload = {handleUpload} img = {img} fileInput = {fileInput} / >
        {/* the  right side of the page which has the text areas */}
        < Textbox value1 = {value1} value2 = {value2} handleChange = {handleChange} setValue1 = {setValue1} setValue2 = {setValue2} />
    </div>
  )
}

export default Main
// couldr pela 