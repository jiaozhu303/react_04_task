'use strict'
import React, {Component} from 'react';
import './AppStyle.css'

export default class App extends Component {
    render() {
        return ( <div className="content">
                    <article>
                        <h1> 首页</h1>
                    </article>
                    <footer>
                        <ul>
                            <li> 首页</li>
                            <li> 消息</li>
                        </ul>
                    </footer>
                </div>
        );
    }
}