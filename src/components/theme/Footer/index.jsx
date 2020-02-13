import React from 'react'
import { Container } from 'components/common'
import { Wrapper, Flex, Links, Details } from './styles'
import social from './social.json'
import GithubIcon from '../../../assets/icons/github.svg'
import TelegramIcon from '../../../assets/icons/telegram.svg'
import LinkedinIcon from '../../../assets/icons/linkedin.svg'

const iconMapping = {
	'Telegram': TelegramIcon,
	'Github': GithubIcon,
	'Linkedin': LinkedinIcon
}

export const Footer = () => (
	<Wrapper>
		<Flex as={Container}>
			<Details>
				<h2>Hai DV</h2>
				<span>
					© All rights are reserved | {new Date().getFullYear()}
				</span>
			</Details>
			<Links>
				{social.map(({ id, name, link, icon }) => (
					<a
						key={id}
						href={link}
						target="_blank"
						rel="noopener noreferrer"
						aria-label={`follow me on ${name}`}
					>
						<img width="24" src={iconMapping[name]} alt={name} />
					</a>
				))}
			</Links>
		</Flex>
	</Wrapper>
)
