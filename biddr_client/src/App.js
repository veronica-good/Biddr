import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import AuctionIndexPage from './components/AuctionIndexPage';
import AuctionShowPage from './components/AuctionShowPage';
import AuctionNewPage from './components/AuctionNewPage';
import { Session } from './requests';
import SignInPage from './components/SignInPage';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import AuthRoute from './components/AuthRoute';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      user:null
    }
    this.handleSubmit=this.handleSubmit.bind(this)
    this.destroySession=this.destroySession.bind(this)
  }
  componentDidMount() {

    Session.currentUser()
    .then(user=>{
      console.log('user', user);
      this.setState((state)=>{
        return {user:user}
      })
    })
  }
  handleSubmit(params){
    // params look like this : {email: 'js@winterfell.gov', password: 'supersecret'}
    Session.create(params).then(()=>{

      return Session.currentUser()}
      ).then(user=>{
        console.log('user', user);
        this.setState((state)=>{
          return {user:user}
        })
      })

  }
  destroySession(){
    Session.destroy()
    .then(res=>{
      this.setState(
          (
          state=>{return {user:null}}
          )
        )
      })
  }

  render(){
    return(
      <div className='App'>
        <BrowserRouter>
        <Navbar currentUser={this.state.user} destroySession={this.destroySession}/>
          <Switch>
            <Route path="/" exact component={Welcome} />
            <Route exact path='/auctions' component={AuctionIndexPage}></Route>
            <Route exact path='/auctions/new' component={AuctionNewPage}/>
            <Route path='/auctions/:id' component={AuctionShowPage}/>
            <Route path='/sign_in' render={(routeProps)=><SignInPage handleSubmit={this.handleSubmit} {...routeProps}/>} />
          </Switch>
        </BrowserRouter>
      </div>      
    )
  }
}


export default App;
