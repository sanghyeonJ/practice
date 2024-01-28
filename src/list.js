import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom';
import Pagination from "./pagination";

function List() {
    const [post, setPost] = useState([]);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const offset = (page - 1) * limit;

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then((data) => setPost(data));
    },[]);

    useEffect(() => {
        if(sessionStorage.getItem('postId')){
            const saved = sessionStorage.getItem('postId');
            const savedPage = Math.ceil(saved / limit);
            setPage(savedPage)
        }
    },[])

    return (
      <div className="list">
        <div className="tableTop">
            <div className="tableCount">
                <p>총 <b>{post.length}</b></p>
                <select value={limit} onChange={({target: {value}}) => {
                    setLimit(Number(value));
                    setPage(1);
                    }}>
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                    <option value={30}>30</option>
                </select>
                <p>개씩 보기</p>
            </div>
        </div>
        <table className="listTable">
            <colgroup>
                <col width={'80px'}/>
                <col/>
                <col width={'140px'}/>
            </colgroup>
            <thead>
                <tr>
                    <th>번호</th>
                    <th>제목</th>
                    <th>이름</th>
                </tr>
            </thead>
            <tbody>
                {post.slice(offset, offset + limit).map((post) => {
                    return(
                        <tr key={post.id}>
                            <td>{post.id}</td>
                            <td><Link to={`/view/${post.id}`}>{post.title}</Link></td>
                            <td>{post.userId}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
        <Pagination
            total = {post.length}
            limit = {limit}
            page = {page}
            setPage = {setPage}
        />
      </div>
    );
  }
  
  export default List;