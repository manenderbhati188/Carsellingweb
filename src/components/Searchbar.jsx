import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
const Searchbar = () => {
  return (
        <div className='border border-black w-full'>
          <input type='text' placeholder='Search Car' className='md:p-2 md:w-full'></input>
        </div>
  )
}

export default Searchbar