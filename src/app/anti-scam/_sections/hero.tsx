import { Button, UnderTitle } from '@/components/ui'
import Link from 'next/link'

export const Hero = () => {
	return (
		<section className='bg-muted-foreground h-[682px] pt-[327px] -mt-[110px] md:pt-[250px] md:h-[600px]'>
			<div className='container'>
				<UnderTitle text='Anti-Scam Verification Process' />
				<h2 className='uppercase text-white-text mb-3 max-w-[900px]'>
					Unsure if you're talking to an official Chainbound representative? Get
					a verified answer.
				</h2>
				<Button asChild>
					<Link href={'/'}>Get a free proposal</Link>
				</Button>
			</div>
		</section>
	)
}
