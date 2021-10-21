import React, {useState} from "react";
import {Button, Input} from "antd";
import {debounce} from "lodash";

const  list = [
    {
        id : 0,
        tille : "eat"
    },
    {
        id : 1,
        tille : "code"
    },
    {
        id : 2,
        tille : "do homeword"
    },
]
function App() {

    const renderList = () => {
     const l =  list.map(item => {
          return(
              <div key={item.id}>
                  <div>{item.tille}</div>
              </div>
          )
       })
      //  l.push()
        return l
    }

    const handleAdd = () => {
       console.log('handleAdd')
    }

    const [search, setSearch] = useState('')
    console.log(search)
    
    const handleSearch = (e) => {
      //  setSearch(e.target.value)
        handleSearchDebound(e.target.value)
       // console.log(e.target.value)
    }

    const handleSearchDebound = debounce((q) => {
      console.log('handleSearchDebound: ', q)
    },500)


  return (
    <div className="container">
      <Input onChange={handleSearch} placeholder="Please enter something."/>
        <div>
                {renderList()}

            <div onClick={handleAdd}>
                <Button type="primary">Add</Button>
            </div>

        </div>

    </div>
  );
}

export default App;
