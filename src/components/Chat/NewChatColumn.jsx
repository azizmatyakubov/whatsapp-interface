import { useSelector, useDispatch } from 'react-redux'
import { InputGroup, FormControl } from "react-bootstrap"
import { changeisNewChat,changeisSearchBarActive } from '../../slices/chat/chatSlice'


const NewChatColumn = () => {
  const isSearchBarActive = useSelector((state) => state.chat.isSearchBarActive)
  const isNewChat = useSelector((state) => state.chat.isNewChat)
  const dispatch = useDispatch()


  return (

    <>
      <div className="data-column bg-white">
        <div className="text-white greenBg pt-5 w-100">
          {/* navbar with arrow state to change "isNewChat" to FALSE to return back=>redux */}
          <i className="bi bi-arrow-left-short mx-4 text-white align-middle" onClick={()=>dispatch(changeisNewChat(!isNewChat))}
 ></i>
          <h4 className="d-inline-block align-middle mt-1 " >New chat</h4>
          {/* manually vertical align arrow , so dirt*/}
        </div>

        <div>
         
          <InputGroup className="mb-3">
            { isSearchBarActive ? 
            (<InputGroup.Text className="bg-white">
              <i className="bi bi-search"></i>
            </InputGroup.Text>) 
            : 
            (<InputGroup.Text className="bg-white">
              <i className="bi bi-arrow-left-short "></i>
            </InputGroup.Text>)
            }

            <FormControl className="rounded " placeholder="Search contacts" onFocus={()=>dispatch(changeisSearchBarActive(!isSearchBarActive))}/>
          </InputGroup>
        </div>

        <div className="mt-2 d-flex flex-row w-100" >{/* logo people ,greenbackground. "NewGroup" */}

        <div className="greenBg rounded-people d-flex mb-2" >
          <i className="bi bi-people-fill d-flex justify-content-center m-auto"></i>
          </div>
              <p>New group</p>
              
        </div>
              <div className="xDivisor"></div>              


        <div className="mt-3 w-100 " >{/* .map with every letter with starting contact letter */}
        <p className="mb-2"> dynamic "A" </p>
        <div className="xDivisor"></div>
        </div>

        <div className="mt-3 w-100">{/* .map call Giorgio's component for every contact, with the prop to down, see contact "status/intro"  */}
        <p className="mb-2"> Contact Component</p>
        <div className="xDivisor"></div>

        </div>
      </div>
    </>
  )
}

export default NewChatColumn
