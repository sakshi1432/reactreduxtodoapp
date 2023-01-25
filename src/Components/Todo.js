import React,{useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {addTodo,deleteTodo,removeTodo} from "./actions/index"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faHandPeace} from '@fortawesome/fontawesome-free-solid'

export default function Todo() {
    const [inputData,setInputData] = useState("");
    const list = useSelector((state) => state.todoreducer.list);
    const dispatch = useDispatch();
  return (
    <div>
        <div className='mainwrapper mt-3'>
             <div>
                <h3 className='title '>
                      Add Your List Here 
                     <span><FontAwesomeIcon icon={faHandPeace} /></span>
                  </h3>
                <div className='d-flex justify-content-center'>
                   <div class="buttonIn col-xs-3  col-8 col-sm-4 col-md-4 col-lg-3">
                      <input type="text" id="enter" placeholder='Add your List' 
                          value={inputData}
                          onChange={(e)=>setInputData(e.target.value)}
                         ></input>
                          <button id="clear" className='add' 
                          onClick={()=>dispatch(addTodo(inputData),setInputData(""))}>+</button>
                    </div>
                </div>
                  <div>
                  {
                    list.map((elem) =>{
                     return (
                      <div>
                        <div className='d-flex justify-content-center mt-3'>
                              <div className='g col-xs-3 
                                 col-8 col-sm-4 col-md-4 col-lg-3' key ={elem.id}>
                                {elem.data}
                                <a href ="#">
                                   <span className='deleteicon' onClick ={()=>dispatch(deleteTodo(elem.id))}> 
                                     <FontAwesomeIcon icon={faTrash} /></span>
                               </a>
                             </div>
                         </div>
                         </div>
                        )
                        })
                   }
                 </div>
                  <div>
                    <button className='btn btn-success mt-3' 
                    onClick = {()=>dispatch(removeTodo())}
                    >Clear All</button>
                  </div>
                </div>
        </div>
    </div>
  )
}
