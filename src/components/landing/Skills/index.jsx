import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Container, Button } from 'components/common'
import dev from 'assets/illustrations/skills.svg'
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles'

export const Skills = () => (
	<Wrapper id="about">
		<SkillsWrapper as={Container}>
			<Thumbnail>
				<img src={dev} alt="I’m HaiDV - Backend & Devops engineer!" />
			</Thumbnail>
			<Details>
				<h1>Hi There!</h1>
				<p>
          Self-studying, concentrating & team-working are my most strong characteristics
				</p>
				<Button as={AnchorLink} href="#contact">
          Contact me
				</Button>
			</Details>
		</SkillsWrapper>
	</Wrapper>
)
