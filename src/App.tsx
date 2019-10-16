import React from 'react';
import Layout from './hoc/Layout/Layout';
import { Route, Switch } from 'react-router-dom';
import { Auth, Quiz, QuizCreator, QuizList } from './containers';

const App: React.FC = (): JSX.Element => {
  return (
    <Layout>
      <Switch>
        <Route path="/auth" component={Auth}/>
        <Route path="/quiz-creator" component={QuizCreator}/>
        <Route path="/quiz/:id" component={Quiz}/>
        <Route path="/" component={QuizList}/>
      </Switch>
    </Layout>
  );
};

export default App;
