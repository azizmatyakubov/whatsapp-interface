import { useState } from "react";

import { InputGroup, FormControl } from "react-bootstrap";
import User from "../User/User.jsx";
const NewChatColumn = () => {
  const [isSearchBarActive, setisSearchBarActive] = useState(true);

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

        <div className="search1 ">
          {/* 
           bigger input
          center search bar
          onClick arrow change state "isNewChat" to FALSE=>  redux */}
          <InputGroup className=" ">
            {isSearchBarActive ? (
              <InputGroup.Text id="no-border" className=" bg-white  ">
                <i className="bi bi-search"></i>
              </InputGroup.Text>
            ) : (
              <InputGroup.Text id="no-border1" className="bg-white">
                <i id="no-border2" className="bi bi-arrow-left-short "></i>
              </InputGroup.Text>
            )}

            <FormControl
              id="search-new"
              className="rounded "
              placeholder="Search contacts"
              onFocus={() => setisSearchBarActive(!isSearchBarActive)}
              onBlur={() => setisSearchBarActive(!isSearchBarActive)}
            />
          </InputGroup>
        </div>

        <div className="new-group">
          {/* logo people ,greenbackground. "NewGroup" */}

          <div id="new-group" className="greenBg rounded-people d-flex ">
            <i className="bi bi-people-fill d-flex justify-content-center m-auto"></i>
          </div>
          <p className="mt-2"> New group</p>
        </div>
        <div className="xDivisor"></div>

        <div className="mt-3 w-100 ">
          {/* .map with every letter with starting contact letter */}
          <p id="p">#</p>
          <div className="xDivisor"></div>
        </div>

        <div className="mt-3 w-100">
          {/* .map call Giorgio's component for every contact, with the prop to down, see contact "status/intro"  */}

          <User />
        </div>
      </div>
    </>
  );
};

export default NewChatColumn;
