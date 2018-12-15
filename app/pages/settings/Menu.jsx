import React from 'react';
import {Link} from 'react-router-dom';

import isURL from 'is-url';
//import isIP from 'is-ip';
import {Tooltip} from 'react-tippy';
// import setMode from '../../scripts/setMode';

export default class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.willChange = false;
        this.toggleCluster = this.toggleCluster.bind(this);
        this.handleActiveItem = this.handleActiveItem.bind(this);
        // this.handleMode = this.handleMode.bind(this);
        this.validateURL = this.validateURL.bind(this);
    }
    componentDidMount() {
        this.handleActiveItem();
    }
    componentWillReceiveProps(nextProps) {
        let params = this.props.params;
        if(nextProps.params.item != params.item || nextProps.params.identifier != params.identifier || nextProps.params.category != params.category) {
            this.willChange = true;
        }
    }
    componentDidUpdate() {
        this.willChange && this.handleActiveItem();
        this.willChange = false;
    }
    toggleCluster(family) {
        console.log(family)
        let toggle = document.getElementById('toggle-' + family);
        let children = document.querySelectorAll('._' + family + '-item');
        if(toggle.classList.contains('on')) {
            for(let child of children) {
                child.classList.remove('visible');
            }
            toggle.classList.remove('on');
        } else {
            for(let child of children) {
                child.classList.add('visible');
            }
            toggle.classList.add('on');
        }
    }
    handleActiveItem(event) {
        if(event) {
            // Close Sidebar
            this.props.close();
        } else {
            let params = this.props.params;
            // Remove "active" style from all menu items
            let anchors = document.querySelectorAll('.menu .link');
            for(let anchor of anchors) {
                anchor.classList.remove('active');
            }
            // Activate menu item if it is specified
            if(params && params.item) {
                let item = document.querySelectorAll('.menu a[href="/settings/' + params.category + '/' + params.identifier + '/' + params.item + '"]')[0];
                item.classList.add('active');
                let parent = item ? item.dataset.parent : '';
                let toggle = document.getElementById('toggle-' + parent);
                if(toggle && !toggle.classList.contains('on')) {
                    this.toggleCluster(parent);
                }
            }
            // Activate first menu item if none specified
            if(!params || (params && !params.item)) {
                let toggle = document.querySelectorAll('.menu .toggle')[0];
                toggle && toggle.click();
                let link = document.querySelectorAll('.menu .submenu[data-label="Code"]')[0];
                link && link.click();
            }
        }
    }
    // handleMode(event) {
    //     let switcher = event.target;
    //     switcher.disabled = true;
    //     let mode = switcher.checked ? 'on': 'off';
    //     self = this;
    //     if(!switcher.checked || this.validateURL(switcher.dataset.url)) {
    //       setMode(switcher.dataset.id, mode, function(response) {
    //           if(response.success) {
    //               self.props.update();
    //           } else {
    //               switcher.checked = !switcher.checked;
    //           }
    //       });
    //     } else {
    //         switcher.checked = !switcher.checked;
    //     }
    //     switcher.disabled = false;
    // }
    validateURL(url) {
      let shortURL = url.replace('https://', '');
      shortURL = shortURL.replace('http://', '');
      shortURL = shortURL.replace('www.', '');
      shortURL = shortURL.replace(/\/+$/, '');
      if(['localhost', '127.0.0.1'].includes(shortURL)) {
          alert(url + ' is not a valid production URL/IP. Please change it before activating Production Mode.')
          return false;
      }
      if(!isURL(url) && 
            //!isIP(shortURL)
            /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(shortURL)
            ) {
          alert(url + ' is not a valid URL/IP!')
          return false;
      }
      return true;
    }
    render() {
        return (
            <div className="menu container">
                <h4>Networks</h4>
                {this.props.instancesMenuItems.map((item, key) => item.toggle
                ? <div key={key} className="switcher">
                    <a id={'toggle-' + item.family.replace(/[:.]/g,'-')} className="toggle" onClick={() => this.toggleCluster(item.family.replace(/[:.]/g,'-'))} data-label={item.label} data-family={item.family.replace(/[:.]/g,'-')}>
                        {(item.label.length > 17) ? (item.label.substring(0, 15) + "...") : item.label}
                        <svg className="open" viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                            <path d="M82.6315789,0 L17.3684211,0 C7.78947368,0 0,7.78947368 0,17.3684211 L0,82.6315789 C0,92.2105263 7.78947368,100 17.3684211,100 L82.6315789,100 C92.2105263,100 100,92.2105263 100,82.6315789 L100,17.3684211 C100,7.78947368 92.2105263,0 82.6315789,0 Z M90,79.4536817 C90,85.2494062 85.2494062,90 79.4536817,90 L20.5463183,90 C14.7505938,90 10,85.2494062 10,79.4536817 L10,20.5463183 C10,14.7505938 14.7505938,10 20.5463183,10 L79.4536817,10 C85.2494062,10 90,14.7505938 90,20.5463183 L90,79.4536817 Z M30,45 L45,45 L45,30 L55,30 L55,45 L70,45 L70,55 L55,55 L55,70 L45,70 L45,55 L30,55 L30,45 Z"></path>
                        </svg>
                        <svg className="close" viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                            <path d="M82.6315789,0 L17.3684211,0 C7.78947368,0 0,7.78947368 0,17.3684211 L0,82.6315789 C0,92.2105263 7.78947368,100 17.3684211,100 L82.6315789,100 C92.2105263,100 100,92.2105263 100,82.6315789 L100,17.3684211 C100,7.78947368 92.2105263,0 82.6315789,0 Z M90,79.4536817 C90,85.2494062 85.2494062,90 79.4536817,90 L20.5463183,90 C14.7505938,90 10,85.2494062 10,79.4536817 L10,20.5463183 C10,14.7505938 14.7505938,10 20.5463183,10 L79.4536817,10 C85.2494062,10 90,14.7505938 90,20.5463183 L90,79.4536817 Z M30,45 L70,45 L70,55 L30,55 L30,45 Z"></path>
                        </svg>
                    </a>
                    
                </div>
                : <Link key={key} to={'/settings/instances/' + item.parent + '/' + item.id} className={'link' + (item.parent ? ' submenu ' + '_' + item.parent.replace(/[:.]/g,'-') + '-item' : '')} onClick={this.changeActive} data-label={item.label} data-parent={item.parent || ''}>{item.label}</Link>
                )}
                <h4>Account</h4>
                {this.props.accountMenuItems.map((item, key) =>
                <Link key={key} to={'/settings/account/' + item.parent + '/' + item.id} className="link" onClick={this.changeActive} data-label={item.label}>{item.label}</Link>
                )}
            </div>
        )
    }
}
