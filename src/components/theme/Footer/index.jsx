import React from 'react'
import { Container } from 'components/common'
import { Wrapper, Flex, Links, Details } from './styles'
import social from './social.json'
import GithubIcon from '../../../assets/icons/github.svg'
import TelegramIcon from '../../../assets/icons/telegram.svg'

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
						{name === 'Telegram' && <img width="24" src={TelegramIcon} alt={name} />}
						{name === 'Github' && <img width="24" src={GithubIcon} alt={name} />}
					</a>
				))}
			</Links>
		</Flex>
	</Wrapper>
)
