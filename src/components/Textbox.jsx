import React from 'react'

const Textbox = (props) => {
  return (
    <section id = "textbox">
            <form>
                {/* textarea 1 */}
                <div>  
                    <label htmlFor="textarea1">Text Box</label>
                    <textarea name="textarea1" value={props.value1} onChange={(e)=> props.handleChange(e, 1, props.setValue1)} id="textarea1" cols="50" rows="10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis velit sunt praesentium. Repellat ea, harum corporis animi molestiae reiciendis laborum.</textarea>
                </div>
            </form>
                {/* textarea 2 */}
                <div>
                    <label htmlFor="textarea2">Text Box</label>
                    <textarea name="textarea1" value={props.value2} onChange={(e)=> props.handleChange(e, 2, props.setValue2)} id="textarea2" cols="50" rows="10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus omnis tempora fugit accusantium est, nostrum fuga soluta dolor magni eos?</textarea>             
                </div>        
    </section>
  )
}

export default Textbox