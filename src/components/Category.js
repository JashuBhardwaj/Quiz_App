import React, { Component } from 'react'
import './category.css'

export default class Category extends Component {
    render() {
        return (
            <>
                <h1>Categories</h1>
                <div className="main" >
                    <ul className="list-group">
                        <li className="hidden"></li>


                        <li className="list-group-item  list" >
                            <i className="fas fa-globe"></i>
                            <span>Current and World Affairs</span>

                        </li>

                        <li className="list-group-item  list" >
                            <i className="fas fa-video"></i>
                            <span>Entertainment</span>

                        </li>

                        <li className="list-group-item list category">
                            <i className="fas fa-atom"></i>
                            <span>Science and Technology</span>

                        </li>

                        <li className="list-group-item list score">
                            <i className="fas fa-paw"></i>
                            <span>Nature and Wildlife</span>

                        </li>

                        <li className="list-group-item list score">
                            <i className="fas fa-running"></i>
                            <span>Sports and Games</span>

                        </li>


                        <li className="hidden"></li>

                    </ul>

                </div>
            </>
        )
    }
}
