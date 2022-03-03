import React from 'react';
import { connect } from 'react-redux';
import { fetchUsers, clearUsers } from '../actions/users';
import styled from 'styled-components';
import { Input, Button, Row, Col } from 'reactstrap';
import sha256 from 'sha256';

import UserTable from '../components/UserTable';

const StyledUsersPage = styled.div``;

class UsersPage extends React.Component {

  constructor(){
    super()
    var today = new Date(),

    date = today.getDate() + '' + (today.getMonth() + 1) + '' + today.getFullYear();
    this.state={
      username: "",
      password: "",
      isLogin: false,
      currentDateTime: date
    }
    this.initialState = { ...this.state }
  }
  componentDidMount() {
    this.props.clearUsers();
    this.props.fetchUsers();
  }

  renderSelamat(show){
    if(show){
      return(
        <h3 className='mt-3'>Selamat Datang</h3>
      )
    }
  }

  login(){
    this.setState({isLogin: true})
    console.log(sha256(this.state.currentDateTime + "Rakhaifabula"))
  }

  logout(){
    this.setState(this.initialState);
  }

  render() {
    return (
      <StyledUsersPage>
        <div className="mt-3">
          <Row>
            <Col>
              <Input hidden={this.state.isLogin} onChange={e => this.setState({username : e.target.value})} placeholder='username' value={this.state.username}/>
              <Input hidden={this.state.isLogin} onChange={e => this.setState({password : e.target.value})} placeholder='passowrd' type="password" value={this.state.password}/>
            </Col>
            <Col>
              <Button hidden={this.state.isLogin} name="login" onClick={() => this.login()}>Login</Button>
              <Button hidden={!this.state.isLogin} name="logout" onClick={() => this.logout()}>Logout</Button>
            </Col>
            <Col>
              {this.renderSelamat(this.state.isLogin)}
            </Col>
          </Row>
        </div>
        <div>
          <h1>Users</h1>
        </div>
        <div className="ui divider" />
        <div>
          <UserTable />
        </div>
      </StyledUsersPage>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => {
      dispatch(fetchUsers());
    },
    clearUsers: () => {
      dispatch(clearUsers());
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(UsersPage);
