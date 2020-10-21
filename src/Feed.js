import React, { Component } from 'react';
import './Feed.css';

import axios from 'axios';
import Posts from './Posts';



class Feed extends Component {

    constructor(props) {
        super(props);

        this.state = {
            postList: []
        };
    }


    getPosts = () => {
        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        };
        axios.post('https://akademia108.pl/api/social-app/post/latest',{},axiosConfig)
        .then((res) => {
            console.log(res.data);
            this.setState({postList:res.data})
        })
        .catch((err) => {
            console.log("AXIOS ERROR: ", err);
        })
    }

    componentDidMount(){
        this.getPosts();
    }

    render() {
        return (
            <div className="Feed">
                <h1>Post</h1>
                <Posts posts={this.state.postList} />

            </div>
        )
    }
}

export default Feed;