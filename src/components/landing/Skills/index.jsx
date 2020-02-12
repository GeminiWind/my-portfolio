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
						HaiDV (stands for "Hai Developer") is a software engineer who work in web development with business to grow their values by analyzing, designing and implementing the solution for their problems.
						After spending more than 2 years working in large IT companies, HaiDV has achieved strong knowledge in NodeJS, ReactJS, database (MySQL, MongoDB, DynamoDB), REST API, testing and cloud.
						Besides, he shows his interest on Devops. He is good at Terraform, Cloudformation, Packer, AWS Cloud, Docker and more.
				</p>
				<p>
					Prior to be Software Architecture as a long-term goal, HaiDV is willing to challenge in working sophisticated system to contribute his ideas in the project to improve code quality, performance, security and availability of the system			
				</p>
			</Details>
		</SkillsWrapper>
	</Wrapper>
)
