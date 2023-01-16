import React from "react";
import CommentListContainer from "./containers/CommentListContainer";
import PageListContainer from "./containers/PageListContainer";
import FormContainer from "./containers/FormContainer";
import CounterContainer from "./containers/CounterContainer";

function App() {
  return (
    <div>
      <CommentListContainer />
      <PageListContainer />
      <FormContainer />
      <CounterContainer />
    </div>
  );
}

export default App;
