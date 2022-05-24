import React from 'react'
import Transition from '../../components/Transition'
import "./Man.css"
import productProvider from "../../Products"
import Product from './Product'
import { useDispatch } from 'react-redux'
const Man = ({timeline}) => {
  
  return (
    <div>
      <Transition timeline={timeline}/>

      <div className="main">
        <div className="left">
        <span>NEW</span>
        <span>COLLEC</span>
        <span>TION</span>
        </div>
      <div className="right">
          <img src="https://images.pexels.com/photos/3027243/pexels-photo-3027243.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
          <img src="https://images.pexels.com/photos/2955376/pexels-photo-2955376.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
          <img src="https://images.pexels.com/photos/1450114/pexels-photo-1450114.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
        </div>
      </div>

      <div className="second">

        <img src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_1423,c_limit/b73fc650-a561-4bf1-a6a3-847a3e335cae/erkek-ayakkab%C4%B1lar%C4%B1-giysileri-ve-aksesuarlar%C4%B1.png" alt="" />
      </div>

      <div className="sale">
        <h1>This Week's Best</h1>
        <div className="prod">
        {
          productProvider.map((item)=><Product key={item.id} item={item}/> )
        }
        </div>
      </div>

    </div>
  )
}

export default Man