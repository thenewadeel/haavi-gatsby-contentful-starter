import React from 'react'
import { Link } from 'gatsby'
import styles from './navigation.module.css'


export default () => (
    <nav role="navigation">
    <ul className={
      // this.state.scroll > this.state.top ? "fixed-nav" : 
      styles.navigation}>
      <li className={styles.navigationItem}>
        <Link to="/">Home</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/about/">About</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/services/">Services</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/projects/">Projects</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/blog/">Blog</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/contact/">Contact</Link>
      </li>
    </ul>
  </nav>
)
/*

class Nav extends React.Component {
  constructor(props) {
		super(props);

		this.state = {};

		this.handleScroll = this.handleScroll.bind(this);
	}

	handleScroll() {
		this.setState({scroll: window.scrollY});
	}
  
  componentDidMount() {
		const el = document.querySelector('nav');
		this.setState({top: el.offsetTop, height: el.offsetHeight});
		window.addEventListener('scroll', this.handleScroll);
	}
  
  componentDidUpdate() {
		this.state.scroll > this.state.top ? 
			document.body.style.paddingTop = `${this.state.height}px` :
			document.body.style.paddingTop = 0;
	}
  
  render() {
    return (
      <nav className={this.state.scroll > this.state.top ? "fixed-nav" : ""}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Careers</li>
          <li>Contact</li>
          <li>Help</li>
        </ul>
      </nav>
    );
  }
}

React.render(<Nav />, document.getElementById('app'));
*/