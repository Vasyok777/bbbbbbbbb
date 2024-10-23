import {
	WhyAccording,
	WhyAgency,
	WhyBelieve,
	WhyClients,
	WhyHero,
	WhyLaser,
	WhyOur,
	WhySuccess,
} from './_services'

export const metadata = {
	title: 'About Us | Chainbound',
	description:
		'About Chainbound, the leading marketing agency for Web3 & crypto companies. Learn why Chainbound has won more awards than any Web3 agency.',
}

export default function WhyPage() {
	return (
		<>
			<WhyHero />
			<WhySuccess />
			<WhyOur />
			<WhyAccording />
			<WhyAgency />
			<WhyBelieve />
			<WhyClients />
			<WhyLaser />
		</>
	)
}
