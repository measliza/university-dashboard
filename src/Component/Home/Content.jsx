import React from 'react'
import logout from '../image/log-out.png';
import Header from '../Header';
import Slider from './Slider';
import Department from './Department/Department';


const Content = () => {

  return (
    <div class=" w-full page-wrapper overflow-hidden">
      <Header/>
      <Slider/>
      <Department/>
	</div>
  )
}

export default Content