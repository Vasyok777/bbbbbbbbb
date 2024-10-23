import {
	About,
	AboutHelp,
	AboutHero,
	AboutJoin,
	AboutLaser,
	AboutNumber,
	AboutSuccess,
	AboutValues,
} from './_services'

export const metadata = {
	title: 'About Us | Chainbound',
	description:
		'About Chainbound, the leading marketing agency for Web3 & crypto companies. Learn why Chainbound has won more awards than any Web3 agency.',
}

export default function AboutPage() {
	return (
		<>
			<AboutHero />
			<About />
			<AboutNumber />
			<AboutSuccess />
			<AboutHelp />
			<AboutLaser />
			<AboutValues />
			<AboutJoin />
		</>
	)
}
