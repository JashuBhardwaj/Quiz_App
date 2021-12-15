import React from 'react'
import styled, { css } from 'styled-components/macro'
import Button from './Button';
import Home from './Home';
import {Link} from "react-router-dom";


const Intro = styled.div`
  margin-top: 0em;
  text-align: center;
`;

const btnCSS = css`
    margin-top: 0em;
`;


const Start = ({props}) => {

    const startQuiz = () => props(true)

    const category =()=>props(true)
 
    return (
        /*
        <Intro>
            <h1>Take the quiz.</h1>
            <h4>Whenever, you want.</h4>
            
            <Button onClick={startQuiz} css={btnCSS}>Start</Button>
            

           
            
           
        </Intro>
        */

       <Intro>

       <h1 className="heading">
        Online Quiz App
        </h1>

    <div className="main" >
        <ul className="list-group">
            <li className="hidden"></li>

            
            <li className="list-group-item  list" onClick={startQuiz}><Link id="len1" to="/quiz">
                <i className="fas fa-crown"></i>
                <span>Play Quiz</span></Link>
                
            </li>
    
            <li className="list-group-item list category"><Link id="len2" to="/category">
                <i className="fas fa-th-list"></i>
                <span>Categories</span></Link>
                
            </li>
    
            <li className="list-group-item list score" ><Link id="len3" to="/scorecard">
                <i className="fas fa-star"></i>
                <span>Score</span></Link>
                
            </li>


            <li className="hidden"></li>

        </ul>
        
    </div>

       </Intro>
        
        
    )
}

export default Start
