import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'

/**
 * MOUNTING : component khởi tạo
 * - render
 * - effect callback
 * 
 * UPDATING : state hoặc props thay đổi
 * - render 
 * - cleanup effect (nếu có) khi dependencies (các giá trị được truyền vào array) bị thay đổi
 * - effect callback khi dependencies bị thay đổi
 * 
 * UNMOUNTING : component bị hủy bỏ
 * - cleanup effect (nếu có)
 *  
 */

function Effect() {
    const [posts, setPosts] = useState([])
    const [userId, setUserId] = useState("");

    const fetchData = () => {
        axios
            .get("https://jsonplaceholder.typicode.com/posts", {
                params: {
                    userId: userId || undefined,
                },
            })
            .then((response) => {
                // Gọi API thành công
                setPosts(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    //useEffect second param is array, chạy 1 lần duy nhất sau lần render đầu tiên (tương tự componentDidMount)
    // Nếu trong effect callback có return về 1 func, nó sẽ được chạy trước khi component bị hủy bỏ (tương tự componentWillUnmount)
    // Thường dùng để call API hoặc tương tác với DOM
    // useEffect(() => {
    //     console.log("Effect run");
    //     fetchData();

    //     return () => {
    //         //Dọn dẹp các tác vụ : removeEventListener, cleanTimeOut,...
    //         console.log("Cleanup effect run");
    //     }
    // }, [])

    // useEffect với tham số thứ 2 là 1 array có chứa giá trị sẽ chạy sau lần render đầu tiên và được chạy sau các lần render tiếp theo nếu các giá trị bên trong array bị thay đổi
    // Nếu trong effect callback có return về 1 func, được chạy trước khi component bị hủy bỏ và từ lần chạy thứ 2 trở đi nó sẽ được chạy trước effect callback
    useEffect(() => {
        console.log("Effect run");
        fetchData();

        return () => {
            //Dọn dẹp các tác vụ : removeEventListener, cleanTimeOut,...
            console.log("Cleanup effect run");
        }
    }, [userId])

    console.log("Render run");

    return (
        <div className='container'>
            <Link to="/hooks-state">State</Link>
            <h1>Posts</h1>
            <select onChange={(event) => setUserId(event.target.value)}>
                <option value="">Select User</option>
                <option value={1}>User 1</option>
                <option value={2}>User 2</option>
                <option value={3}>User 3</option>
                <option value={4}>User 4</option>
            </select>
            <ul>
                {posts.map((post) => {
                    return <li key={post.id}>{post.id}/ {post.title}</li>
                })}
            </ul>
        </div>
    )
}

export default Effect