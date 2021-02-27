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
import SignUpPage from './components/SignUpPage';
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

  handleSignUp(){
    Session.currentUser().then(user=>{
      this.setState((state)=>{
        return {user:user}
      })
    })
  }

  handleSubmit(params){
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
            <AuthRoute exact path='/auctions/new' isAuth={this.state.user} component={AuctionNewPage}/>
            <AuthRoute path='/auctions/:id' isAuth={this.state.user} component={AuctionShowPage}/>
            <Route path='/sign_in' render={(routeProps)=><SignInPage handleSubmit={this.handleSubmit} {...routeProps}/>} />
            <Route path='/sign_up' render={(routeProps)=><SignUpPage handleSignUp={this.handleSignUp} {...routeProps}/>}/>
          </Switch>
        </BrowserRouter>
      </div>      
    )
  }
}


export default App;
