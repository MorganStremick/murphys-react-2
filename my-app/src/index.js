import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Menu, Image, Dropdown, Icon, Grid, List } from 'semantic-ui-react';

class TopMenu extends React.Component {
  render() {
    return (
        <Menu borderless className="topmenu">
          <Container>
            <Menu.Item>
              <Image className="murphyslogo" src="http://murphyshawaii.com/media/2014/04/murphyshawaii.png"
                     size="small"/>
            </Menu.Item>
            <Menu.Item position="right">Home</Menu.Item>
            <Dropdown item text="About Us" icon="dropdown">
              <Dropdown.Menu>
                <Dropdown.Item>
                  Hello
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Menu.Item>St. Patrick's Day</Menu.Item>
            <Dropdown item text="Menu" icon="dropdown">
              <Dropdown.Menu>
                <Dropdown.Item>
                  Hello
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Menu.Item>Bar</Menu.Item>
            <Menu.Item>
              <Icon name="search"/>
            </Menu.Item>
          </Container>
        </Menu>
    );
  }
}

class MiddleImage extends React.Component {
  render() {
    return (
        <div className="middle-background">
          <Grid columns={2}>
            <Grid.Column>
              <Image src="http://murphyshawaii.com/media/2014/04/murphyshawaiilogo.png" className="middle-image"/>
            </Grid.Column>
            <Grid.Column>
              <div className="middle-text-container">
                <p className="middle-text">A traditional downtown saloon and eatery located in the Honolulu Financial
                  District, just
                  one block off the waterfront, Murphy’s has been a haven for mariners, businessmen and locals since
                  1891.</p>
              </div>
            </Grid.Column>
          </Grid>
        </div>
    );
  }
}

class Footer extends React.Component {
  render() {
    return (
        <div className="footer-background">
          <Grid container columns={3}>
            <Grid.Column>
              Lunch
              <hr/>
              <List>
                <List.Item>
                  Monday-Friday: 11:00am - 2:30pm
                </List.Item>
                <List.Item>
                  Saturday-Sunday: not open for lunch
                </List.Item>
              </List>
            </Grid.Column>
            <Grid.Column>
              Bar
              <hr/>
              <List>
                <List.Item>
                  Monday-Friday: from 11:00am
                </List.Item>
                <List.Item>
                  Saturday-Sunday: from 4:00pm
                </List.Item>
              </List>
            </Grid.Column>
            <Grid.Column>
              Dinner
              <hr/>
              <List>
                <List.Item>
                  Monday-Saturday: 5:30pm - 10:00pm
                </List.Item>
                <List.Item>
                  Sunday: 5:00pm - 9:00pm
                </List.Item>
              </List>
            </Grid.Column>
          </Grid>
        </div>
    );
  }
}

class Murphys extends React.Component {
  render() {
    return (
        <div>
          <TopMenu/>
          <MiddleImage/>
          <Footer/>
        </div>
    );
  }
}

ReactDOM.render(<Murphys/>, document.getElementById('root'));
