import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom'
import { close, open } from '../../redux/Actions/HomeAct';
import './default.scss'

function Default(props){
    const openClose=useSelector(state=>state.home.openClose)
    const dispatch=useDispatch();

    useEffect(() => {
        let previousPosition;
        const callback = () => {
            if (previousPosition) {
                const currentPosition = document.body.getBoundingClientRect().y;
                if (currentPosition >= previousPosition) {
                    // console.log('Bardzracanq verev')
                    dispatch(open())
                } else if(currentPosition <= -200) {
                    // console.log('Ijanq nerqev')
                    dispatch(close())
                }
                previousPosition = document.body.getBoundingClientRect().y;
            } else {
                previousPosition = document.body.getBoundingClientRect().y;
            }
        };

        window.addEventListener('scroll', callback);

        return () => {
            window.removeEventListener('scroll', callback);
        };
    }, []);

    return (
        <div>
            <div className={openClose}>
                <nav>
                    <ul>
                        <div>
                            <li >
                                <Link to="/">Home</Link>
                            </li>
                        </div>
                        <div>
                            <li>
                                <Link to="/login">Log In</Link>
                            </li>  
                            <li >
                                <Link  to="/signUp">Sign Up</Link>
                            </li>
                        </div>
                    </ul>

                </nav>
            </div>
            <div className="container">
                {props.children}
            </div>
        </div>
    )
}
export default Default;