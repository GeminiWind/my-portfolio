import React from 'react'
import { Container } from 'components/common'
import dev from 'assets/illustrations/skills.svg'
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles'

export const Skills = () => (
	<Wrapper id="about">
		<SkillsWrapper as={Container}>
			<Thumbnail>
				<img src={dev} alt="I’m HaiDV - Backend & Devops engineer!" />
			</Thumbnail>
			<Details>
				<h1>About Me</h1>
				<p>
          			Hi! I am a little boy with a big passionate in making software product, especially in building & discovering sophisticated architecture of large business
				</p>
				<p>
          			Now, I'm on the way going to be Javascript full-stack developer, with focus in Node & React. My expertise is in automation, optimization and security.
				</p>
			</Details>
		</SkillsWrapper>
	</Wrapper>
)
