/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Logo, Title } from './components/common-components/Card';
import { Header, Main, Layout } from './components/common-components/Layout';
import { Org } from './components/common-components/Org';
import Profile from './components/common-components/Profile';
import Toast from './components/common-components/Toast';
import Node from './components/Node';
import Sidebar from './components/Sidebar';
import getAllEmployees from './redux/actions/getAllEmployees';


function App({
  getAllData,
  isVisible,
  message
}) {
  useEffect(() => {
    getAllData();
  }, [])
  return (
    <div id="container">
      <Header>
        <Logo src="https://i.imgur.com/aaSbwhh.png" />
        <Title>Organization Chart</Title>
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
  toast
}) => {
  const { isVisible, message } = toast;
  return {
    isVisible,
    message
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllData: bindActionCreators(getAllEmployees, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);