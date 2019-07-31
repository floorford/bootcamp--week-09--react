const App = () => (
  <Router>
    <Fragment>
      { /* always show the Header component */ }
      <Header subtitle="Space Wombats">My App</Header>
      { /* if the URL is the homepage, load the Buttons component  */ }
      <Route exact path="/" component={ Buttons }/>
    </Fragment>
  </Router>
);

export default App;
