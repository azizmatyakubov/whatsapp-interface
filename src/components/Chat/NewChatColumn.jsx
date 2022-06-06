import { useState } from "react"

import { InputGroup, FormControl } from "react-bootstrap"
const NewChatColumn = () => {
  const [searchBarActivated, setSearchBarActivated] = useState(true)

  return (

    /* responsiveness */
    <>
      <div className="data-column bg-white">
        <div className="text-white greenBg pt-5 w-100">
          {/* navbar with arrow state to change NEWCHAT to FALSE to return back=>redux */}
          <i className="bi bi-arrow-left-short mx-4 text-white align-middle"></i>
          <h4 className="d-inline-block align-middle mt-1 ">New chat</h4>
          {/* manually vertical align arrow , so dirt*/}
        </div>

        <div>
          {/*  bigger input
          center search bar
          onClick arrow change state "isNewChat" to FALSE=>  redux */}
          <InputGroup className="mb-3">
            { searchBarActivated ? 
            (<InputGroup.Text className="bg-white">
              <i className="bi bi-search"></i>
            </InputGroup.Text>) : 
            (<InputGroup.Text className="bg-white">
              <i className="bi bi-arrow-left-short"></i>
            </InputGroup.Text>)}

            <FormControl className="px-4 rounded " placeholder="Search contacts" onFocus={()=>setSearchBarActivated(!searchBarActivated)}/>
          </InputGroup>
        </div>

        <div className="border-bottom mt-2" >{/* logo people ,greenbackground. "NewGroup" */}
        <i className="bi bi-people-fill mx-2 greenBg rounded-people p-3"></i>
              <span> New group</span>
        </div>


        <div className="border-bottom mt-3" >{/* .map with every letter with starting contact letter */}
        <span> A</span>
        </div>

        <div className="border-bottom mt-3">{/* .map call Giorgio's component for every contact, with the prop to down, see contact "status/intro"  */}
        <span className="">Component</span>
        </div>
      </div>
    </>
  )
}

export default NewChatColumn
