import {createContext,useState} from 'react';

export const UserAuthorContextObj=createContext();

function UserAuthorContext({children}) {

  let [currentUser,setCurrentUser]=useState({
    firstName:'',
    lastName:'',
    email:'',
    profileImageUrl:'',
    role:''
  })

  return (
    <div>UserAuthorContext</div>
  )
}

export default UserAuthorContext;