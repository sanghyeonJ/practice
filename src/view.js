import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import {Link} from 'react-router-dom';
function View() {
    const params = useParams();
    const postId = params.id;

    const [post, setPost] = useState({});

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then((data) => setPost(data[postId - 1]));
    },[]);
    sessionStorage.setItem('postId', postId);
    return (
        <div className="view">
            <table className="viewTable">
                <colgroup>
                    <col width={'140px'}/>
                    <col/>
                </colgroup>
                <tbody>
                    <tr>
                        <th>제목</th>
                        <td>{post.title}</td>
                    </tr>
                    <tr>
                        <th>내용</th>
                        <td>{post.body}</td>
                    </tr>
                </tbody>
            </table>
            <div className="btn_center">
                <Link to={'/'} className="btn">목록</Link>
            </div>
        </div>
    )
}

export default View;