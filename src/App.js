import React, { useEffect, useState } from 'react'
import wretch from 'wretch'
import logo from './logo.svg';
import './App.css';
import RecoilTest from './Components/RecoilTest';
import { RecoilRoot } from 'recoil';

function getAPI() {
  const API_Link = "https://jsonplaceholder.typicode.com/todos"
  return wretch(API_Link)
}

function App() {

  const [users, setUsers] = useState([])
  const [searchItem, setSearchItem] = useState("")

  useEffect(() => {
    getAPI()
      .get()
      .json(data => setUsers(data))
      .catch(error => console.log(error))
  }, [])

  // programe for filter items
  const filterItems = users.filter(items => {
    const Titles = items.title.toLowerCase()
    return Titles.includes(searchItem.toLowerCase());
  })

  return <>
  <RecoilRoot>
    {/* <input class="form-control mr-sm-2" type="text" placeholder="Search Items" onChange={e => setSearchItem(e.target.value)} />
    <div>
      {
        filterItems.map((lists) => <div key={lists.id}>
          <h5>{lists.title}</h5>
        </div>)
      }
    </div> */}
    <RecoilTest />
    </RecoilRoot>
  </>
}

export default App;
