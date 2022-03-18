import React from 'react';
import { Scarecrow } from '../../assets/export/export';
import './Content.css';

export default function Content() {
  return (
    <>
        <div className='content-1'>
            <img src={Scarecrow} alt='Scare Crown'/>
        </div>
        <div className='content-2'>
            <h1>I have bad news for you</h1>
            <p>The page you are looking for might be removed or is temporarily unavailable</p>
            <button>Back to homepage</button>
        </div>
    </>
  )
}
