/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Button from './components/common-components/Button';
import { Logo, Title } from './components/common-components/Card';
import { Header, Main, Layout } from './components/common-components/Layout';
import { Org } from './components/common-components/Org';
import Profile from './components/common-components/Profile';
import Toast from './components/common-components/Toast';
import Node from './components/Node';
import Sidebar from './components/Sidebar';
import getAllEmployees from './redux/actions/getAllEmployees';
import setParent from './redux/actions/setParent';


function App({
  getAllData,
  isVisible,
  message,
  setParentEl,
  rootParent
}) {
  useEffect(() => {
    getAllData();
  }, [])
  return (
    <div id="container">
      <Header>
        <Logo src="https://i.imgur.com/aaSbwhh.png" />
        <Title>Organization Chart</Title>
        {rootParent ? <Button onClick={() => {
            setParentEl(null)
          }}>Reset</Button> : null}
      </Header>
      <Layout>
        <Sidebar />
        <Main>
          <Org>
            <Node />
          </Org>
        </Main>
      </Layout>
      <Profile />
      <Toast isVisible={isVisible}>
        {message}
      </Toast>
    </div>
  );
}

const mapStateToProps = ({
  toast,
  rootParent
}) => {
  const { isVisible, message } = toast;
  return {
    isVisible,
    message,
    rootParent
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllData: bindActionCreators(getAllEmployees, dispatch),
    setParentEl: bindActionCreators(setParent, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);