import './App.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import HomePage from './components/pages';
import Footer from './components/base/Footer';
import TopBar from './components/base/Header';
import { connect } from 'react-redux';
import { Fragment } from 'react';

function App() {
  return (
    <Fragment>
      <Router>
        <Route exact path='/'>
          <TopBar />
          <HomePage />
          <Footer />
        </Route>
      </Router>
    </Fragment>
  );
}

App.propTypes = {};
const mapStateToProps = (state) => ({});
export default connect(mapStateToProps, {})(App);
