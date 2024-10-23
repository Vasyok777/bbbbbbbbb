import { Button, CardWidget, UnderTitle } from '@/components/ui'
import Image from 'next/image'
import Link from 'next/link'

export const Web = () => {
	return (
		<section className='container py-20 lg:py-[60px] md:py-10'>
			<div className='grid grid-cols-[0.64fr_0.36fr] lg:grid-cols-2 md:grid-cols-1 gap-6 md:gap-8 items-center md:justify-center'>
				<div className='md:order-1'>
					<UnderTitle text='Web3 Lead Gen' />
					<h2 className='uppercase mb-3 text-[32px]'>
						We help B2B Web3 companies build powerful outbound sales processes
						at scale.
					</h2>
					<p className='mb-8 text-accent leading-[100%]'>
						We create powerful outbound sales processes that bring you a steady
						stream of qualified leads. Our performance-based pricing means you
						only pay for the results we generate.
					</p>
					<div className='grid gap-4 mb-8 grid-cols-1'>
						<CardWidget
							title='50k+ qualified leads'
							text='Our team has driven over 50,000 qualified leads to crypto businesses like yours.'
						/>
					</div>
					<Button asChild className='md:justify-center md:flex'>
						<Link href={'/'}>Hire an On-Demand Crypto Sales Team</Link>
					</Button>
				</div>
				<div className='md:flex md:justify-center'>
					<Image src={'/home/web.png'} width={389} height={325} alt='Set up' />
				</div>
			</div>
		</section>
	)
}
