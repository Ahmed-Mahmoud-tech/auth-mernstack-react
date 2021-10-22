import React, {useState, useEffect} from 'react'
import jwt from 'jsonwebtoken';
import { useHistory } from "react-router-dom";

const Post = () => {
  let history = useHistory();

    const [data, setData] = useState("you don't have any post")

    const refreshtokenfun = async () => {
      const response = await fetch('http://localhost:4000/app/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({token:JSON.parse(localStorage.getItem('token')).refreshToken})
      });

      try{
        let x = await response.json();
        var asdf = JSON.parse(localStorage.getItem('token'));
        asdf.accessToken = x.accessToken;
        localStorage.setItem('token', JSON.stringify(asdf))
      } catch (err){
        console.log(err)
      }

    }
    
    async function getdata(url=''){
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'authorization': JSON.parse(localStorage.getItem('token')).accessToken,
          },
        });

        try{
          let resOfPost = await response.json();
          console.log("resOfPost", resOfPost);
        } catch {
            if(JSON.parse(localStorage.getItem('token')).refreshToken != null){
            await refreshtokenfun()
            getdata('http://localhost:4000/app/post');
          }
        }
      }


    useEffect(() => {
      if(jwt.decode(JSON.parse(localStorage.getItem('token')).accessToken)){
        getdata('http://localhost:4000/app/post');
      }else{
        history.replace('/login');
        localStorage.removeItem('token')
      }
    }, []);

    return (
        <div>
            {data}
        </div>
    )
}
export default Post;