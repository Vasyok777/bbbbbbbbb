import { Button, UnderTitle } from '@/components/ui'
import Link from 'next/link'

export const WhyHero = () => {
	return (
		<section className='bg-muted-foreground h-[682px] pt-[327px] -mt-[110px] md:pt-[250px] md:h-[550px]'>
			<div className='container'>
				<UnderTitle text='About Chainbound' className='uppercase' />
				<h2 className='uppercase text-white-text mb-3 max-w-[500px]'>
					We're an agency built for the speed of Web3 clients.
				</h2>
				<Button asChild>
					<Link href={'/contact'}>Get a free proposal</Link>
				</Button>
			</div>
		</section>
	)
}
