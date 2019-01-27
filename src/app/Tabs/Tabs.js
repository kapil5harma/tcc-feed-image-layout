import React, { Component } from 'react';
import glamorous from 'glamorous';

import Tab from './Tab';

const ListTabs = glamorous.ul({
  paddingLeft: 0,
  listStyle: 'none',
  whiteSpace: 'nowrap',
  margin: '0 10px',
  boxSizing: 'border-box',
  height: '50px',
  // opacity: 0.05
  backgroundColor: 'rgb(246,247,247)'
});

const TabTitleItem = glamorous.li(
  {
    display: 'inline-block',
    paddingRight: 5,
    paddingLeft: 5,
    transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    padding: '16px 30px',
    cursor: 'pointer',
    opacity: '0.5',
    fontSize: '14px',
    fontWeight: 500,
    color: '#404852',
    ':hover': {
      opacity: 1
    }
  },
  props => {
    return (
      props.isActiveTab && {
        transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
        cursor: 'default',
        opacity: 1
      }
    );
  }
);

const ActiveTabBorder = glamorous.div(
  {
    height: 4,
    width: 100,
    backgroundColor: '#ff5055',
    borderRadius: '2px ',
    position: 'absolute',
    bottom: 0,
    transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    willChange: 'left, width'
  },
  props => {
    return (
      props.activeTabElement && {
        width: props.activeTabElement.offsetWidth,
        left: props.activeTabElement.offsetLeft
      }
    );
  }
);

const TabAnchorItem = glamorous.a({
  textTransform: 'capitalize',
  color: '#000000',
  fontWeight: 600
});

const TabsContainer = glamorous.div({
  position: 'relative',
  borderBottom: '1px solid #dfdfdf'
});

const ReactTabs = glamorous.div({
  position: 'relative'
});

class Tabs extends Component {
  static Tab = Tab;

  state = {
    tabs: [],
    prevActiveTab: {},
    activeTab: this.props.activeTab,
    tabsElements: []
  };

  addTab = newTab => {
    let isNewTabFound;

    for (let i in this.state.tabs) {
      let tab = this.state.tabs[i];

      if (tab.id === newTab.id) {
        isNewTabFound = true;
        break;
      }
    }

    if (!isNewTabFound) {
      this.setState((prevState, props) => {
        return {
          tabs: prevState.tabs.concat(newTab)
        };
      });
    }
  };

  removeTab = tabId => {
    this.setState((prevState, props) => {
      return {
        tabs: prevState.tabs.filter(tab => tab.id !== tabId)
      };
    });
  };

  onClick = tab => event => {
    this.setState((prevState, props) => {
      return {
        prevActiveTab: prevState.activeTab,
        activeTab: tab
      };
    });
  };

  render() {
    return (
      <ReactTabs>
        <TabsContainer>
          <ListTabs>
            {this.state.tabs.map((tab, index) => (
              <TabTitleItem
                key={index}
                onClick={this.onClick(tab)}
                id={tab.id}
                innerRef={tabElement => {
                  if (!this.state.tabsElements[tab.id]) {
                    this.setState((prevState, props) => {
                      const tabsElements = prevState.tabsElements;
                      tabsElements[tab.id] = tabElement;

                      return {
                        tabsElements
                      };
                    });
                  }
                }}
                isActiveTab={this.state.activeTab.id === tab.id}
              >
                <TabAnchorItem>{tab.title}</TabAnchorItem>
              </TabTitleItem>
            ))}
          </ListTabs>

          <ActiveTabBorder activeTabElement={this.state.tabsElements[this.state.activeTab.id]} />
        </TabsContainer>

        {React.Children.map(this.props.children, child =>
          React.cloneElement(child, {
            activeTab: this.state.activeTab,
            addTab: this.addTab
          })
        )}
      </ReactTabs>
    );
  }
}

export default Tabs;
