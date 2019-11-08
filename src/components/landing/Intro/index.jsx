import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Header } from 'components/theme'
import { Container, Button } from 'components/common'
import dev from 'assets/illustrations/dev.svg'
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles'

export const Intro = () => (
	<Wrapper>
		<Header />
		<IntroWrapper as={Container}>
			<Details>
				<h1>Hi There!</h1>
				<h4>I’m HaiDV - Backend & Devops engineer!</h4>
				<h4>I'm passionate with building & discovering sophisticated architecture of large business.</h4>
				<Button as={AnchorLink} href="#contact">
					Contact me 
				</Button>
			</Details>
			<Thumbnail>
				<img src={dev} alt=">I’m HaiDV. I am very passionate about making software product!" />
			</Thumbnail>
		</IntroWrapper>
	</Wrapper>
)
