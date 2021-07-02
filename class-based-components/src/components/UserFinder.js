import { Fragment, Component } from 'react';

import Users from './Users';
import classes from './UserFinder.module.css';
import UsersContext from "../store/users-context"
import ErrorBoundary from "./ErrorBoundary"

export default class UserFinder extends Component {
  // you can attach only one context per component
  static contextType = UsersContext;
  constructor() {
    super();
    this.state = {
      allUsers: [],
      filteredUsers: [],
      searchTerm: ""
    };
  }
  // assuming this does http request and gives re
  getData = () => new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([...this.context.users, { id: 'u4', name: 'Sarah' }])
    }, 400);
  });
  componentDidMount() {
    (async () => {
      // http request to get some data 
      let allUsers = await this.getData();
      this.setState({ filteredUsers: allUsers, allUsers: allUsers })
    })();
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.setState({
        filteredUsers:
          this.state.allUsers.filter((user) => user.name.includes(this.state.searchTerm))
      });
      if (this.state.filteredUsers.length === 0) {
        throw new Error("No users found!");
      }
    }
  }
  searchChangeHandler = (event) => {
    this.setState({ searchTerm: event.target.value });
  };
  render() {

    return (
      <Fragment>
        <div className={classes.finder}>
          <input type='search' value={this.state.searchTerm} onChange={this.searchChangeHandler.bind(this)} />
        </div>
        <ErrorBoundary>
          <Users users={this.state.filteredUsers} />
        </ErrorBoundary>
      </Fragment>
    );
  }
}