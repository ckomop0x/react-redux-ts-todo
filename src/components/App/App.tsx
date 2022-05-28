import React from 'react';

import Tasks from 'components/Tasks';
import Layout from 'components/UI/Layout';
import Title from 'components/UI/Title';

const App = () => (
  <Layout>
    <Title>
      Radiologists <span>fast notes</span>
    </Title>
    <Tasks />
  </Layout>
);

export default App;
