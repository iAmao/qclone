import React from 'react';
import Layout from '../client/components/Layout';
import Fullscreen from '../client/components/FullScreen';
import Auth from '../client/components/Auth';
import Bulma from '../client/components/Bulma';

const bg = {
  background: 'url("http://qsf.ec.quoracdn.net/-3-images.home.illo_1920.png-26-c2ec7e7800f647b8.png")',
  backgroundSize: 'cover'
};

class LoginPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      display: 'auth'
    };
  }

  render() {
    const { display } = this.state;
    return (
      <Bulma>
        {display === 'interests' ?
          <Layout>
            <div>interests</div>
          </Layout>
          :
          <Fullscreen bg={bg}>
            <Auth />
          </Fullscreen>
        }

      </Bulma>
    );
  }

}

export default LoginPage;
