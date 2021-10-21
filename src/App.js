import React, {useState} from "react";
import {Button, Input, Modal, Checkbox} from "antd";
import {debounce} from "lodash";

const  initlist = [
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
    const [search, setSearch] = useState('')

    const [visible, setvisible] = useState(false)

    const [thing, sething] = useState('')

    const [list, setlist] = useState(initlist)

    const renderList = () => {
     const l =  list.map(item => {
          return(
              <div key={item.id}>
                  <div>{item.tille}</div>
                  <div>
                      <Checkbox>Done</Checkbox>
                  </div>
              </div>
          )
       })
        // l.push(
        //     <div key={-1} onClick={handleAdd}>
        //         <Button type="primary">Add</Button>
        //     </div>
        // )
        return l
    }

    const handleAdd = () => {
        //open modal
        setvisible(true)
       //console.log('handleAdd')
    }

    // handleOk
    const handleOkCreateModel = () => {
        if (thing.length > 0) {
            const  item = {
                id : list.length,
                tittle : thing
            }

            setlist([
                item,
                ...list
            ])

            setvisible(false);
            sething('')
            //call api
        }
    };
    //handleCancel
    const handleCancel = () => {
        setvisible(false);
        sething('')
    };

    //   console.log(search)
    
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

        </div>

        <Modal
               title="Basic Modal"
               visible={visible}
               onOk={handleOkCreateModel}
               onCancel={handleCancel}
        >
           <div>
               <label>What do you do?</label>
               <Input value={thing} onChange={e => sething(e.target.value)} placeholder="Enter something."/>
           </div>
        </Modal>


        <div onClick={handleAdd}>
            <Button type="primary">Add</Button>
        </div>
    </div>
  );
}

export default App;
