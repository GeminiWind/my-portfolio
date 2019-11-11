import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Wrapper } from './styles'
import config from '../../../../data/config'

const NavbarLinks = ({ desktop }) => (
	<Wrapper desktop={desktop}>
		<AnchorLink href="#projects">Projects</AnchorLink>
		<a href={config.blogUrl} rel="noopener noreferrer" target="_blank">Blog</a>
		<AnchorLink href="#about">About</AnchorLink>
		<AnchorLink href="#contact">Contact</AnchorLink>
	</Wrapper>
)

export default NavbarLinks
