import React, { useState } from "react";
import "./App.css";
import AnimatedText from "./components/animatedText/AnimatedText";

// import MultiDirectionalSlider from './components/multiDirectionalSlider/MultiDirectionalSlider';

// import TabsContainer from './components/tabs/TabContainer';
// import Tab from './components/tabs/Tab';
// import logo from './logo.svg';

// import DeviceView from './components/deviceView/DeviceView';
// import IconNav from './components/miniNav/IconNav';
// import Screen from './components/miniNav/Screen';

// import ActionButton from './components/actionButton/ActionButton';
// import Modal from './components/modal/Modal';
// import LoginForm from "./components/loginForm/Login";

function App() {
  // const [focus, setFocus] = useState(0);

  // const [modalOpened, setModalOpened] = useState(false);

  return (
    <div className="App">
      {/* <MultiDirectionalSlider />   */}

      {/* <TabsContainer default={0} >
        <Tab title="Test 1">Description</Tab>
        <Tab title="Test 2"><h2>heading</h2><p>this is some text</p></Tab>
        <Tab title="Test 3"><img src={logo} alt="logo" /></Tab>
      </TabsContainer> */}

      {/* <DeviceView device="Mobile">
        <IconNav focus={focus} changeFocus={setFocus} />
        <Screen focus={focus} />
      </DeviceView> */}

      {/* <ActionButton text="Login" type="Prime" action={() => setModalOpened(true)} />
      <Modal open={modalOpened} action={(state) => setModalOpened(state)}>
        <LoginForm />
      </Modal> */}

      <AnimatedText text="Hello, how are you today?" />

    </div>
  );
}

export default App;
