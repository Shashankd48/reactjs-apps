import React, { useEffect, useState } from "react";
import Axios from "axios";
import { ListGroup, ListGroupItem } from "reactstrap";

export default function Repos({ repos_url }) {
   const [repos, setRepos] = useState([]);
   const fetchRepos = async () => {
      const { data } = await Axios.get(repos_url);
      console.log(data);
      setRepos(data);
   };
   useEffect(() => {
      fetchRepos();
   }, [repos_url]);
   return (
      <div
         className="mt-3"
         style={{
            boxShadow: "5px 5px 20px rgba(0,0,0,0.5)",
         }}
      >
         <ListGroup>
            {repos.map((repo) => (
               <ListGroupItem key={repo.id}>
                  <div className="text-primary">
                     <a href={repo.html_url}>{repo.name} </a>
                  </div>
                  <div className="text-secondary">{repo.language} </div>
                  <div className="text-dark">{repo.description} </div>
               </ListGroupItem>
            ))}
         </ListGroup>
      </div>
   );
}
