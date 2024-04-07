import React, { useState } from 'react'
import './Box.css';

const Box = () => {
    const [content,setContent] = useState('');

    const handleTextArea = (e) => {
        setContent(e.target.value);
    }

    const words = (text) => {
        const words = text.trim().split(/\s+/);
        return words.filter(word => word !== '').length;
      };
    
      const uppercase = () => {
        const uppercaseText = content.toUpperCase();
        setContent(uppercaseText);
      }

      const lowercase = () => {
        const lowercaseText = content.toLowerCase();
        setContent(lowercaseText);
      }

      const Capitalize = () => {
        const cap =  content.replace(/\b\w/g, (char) => char.toUpperCase());
        setContent(cap);
      }
      
      const removeText = () => {
        setContent('');
      }

      const copyToClipboard = () => {
        window.navigator.clipboard.writeText(content);
      }
      
    return (
        <div className='area'>
            <h1>Convert your Text</h1>
            <textarea name="area" id="area" cols="70" rows="20" className='textarea' value={content} onChange={handleTextArea}></textarea>
            <div>
                <button style={{margin:"5px"}} className='button' onClick={uppercase}>Convert into Capital</button>
                <button style={{margin:"3px"}} className='button' onClick={lowercase}>Convert into Small</button>
                <button style={{margin:"5px"}} className='button' onClick={Capitalize}>Convert to Capitalize</button>
                <button style={{margin:"3px"}} className='button' onClick={removeText}>Remove your Text</button>
                <button style={{margin:"5px"}} className='button' onClick={copyToClipboard}>Copy to Clipboard</button>
            </div>
            <div>Alphabet:{content.length}</div>
            <div>Words:{words(content)}</div>
        </div>
    )
}

export default Box