import { h } from 'preact';
// import { Icon } from 'astro-icon'

import Styles from './styles.module.scss';

function Footer() {
	return (
		<footer className={Styles.footer} style="position:absolute;bottom:0;width:100%">
			<p style="font-size:12px;text-shadow: 0px 0px 2px #000000, 2px 3px 4px #000000;margin-right: 1rem">Made with <svg aria-hidden="true" role="img" style="vertical-align: -0.125em;" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.5 12.572L12 20l-7.5-7.428m0 0A5 5 0 1 1 12 6.006a5 5 0 1 1 7.5 6.572"/></svg> in Cologne <svg  aria-hidden="true" role="img" style="vertical-align: -0.125em;" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M14 9.75a3.016 3.016 0 0 0-4.163.173a2.993 2.993 0 0 0 0 4.154A3.016 3.016 0 0 0 14 14.25"/></g></svg> {new Date().getFullYear()} Nadix Snow</p>
		</footer>
	);
}
export default Footer;
