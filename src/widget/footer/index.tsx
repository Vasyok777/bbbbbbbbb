import { Email, Street } from '@/components/icons'
import Image from 'next/image'
import Link from 'next/link'

export const Footer = () => {
	return (
		<footer className='bg-title py-[60px] md:py-10 text-white-text'>
			<div className='container'>
				<div className='grid grid-cols-3 gap-4 lg:grid-cols-2 lg:gap-8 md:grid-cols-1'>
					<div className='max-w-[280px] w-full md:max-w-full'>
						<Link href={'/'} className='mb-4 flex'>
							<Image
								src='/logo-back.svg'
								width={212}
								height={31}
								alt='Chainbound logo'
							/>
						</Link>
						<div className='flex items-center gap-2 mb-2'>
							<Street />
							<p className='leading-[120%] text-[14px] text-white-text'>
								40 Leadenhall Street, London, UK, EC3A 2AD
							</p>
						</div>
						<div className='flex items-center gap-2'>
							<Email />
							<Link
								href={'mailto:partners@chainbound.org'}
								className='leading-[110%] text-[14px] underline text-white-text'
							>
								partners@chainbound.org
							</Link>
						</div>
					</div>
					<div className='grid grid-cols-2 gap-4'>
						<div>
							<h4 className='text-primary mb-3 uppercase text-[18px] font-roboto'>
								Company
							</h4>
							<ul>
								<li className='mb-3'>
									<Link
										href={'/about'}
										className='uppercase text-[13px] text-white-text hover:underline'
									>
										About Chainbound
									</Link>
								</li>
								<li className='mb-3'>
									<Link
										href={'/why'}
										className='uppercase text-[13px] text-white-text hover:underline'
									>
										Why Chainbound?
									</Link>
								</li>
								<li>
									<Link
										href={'/anti-scam'}
										className='uppercase text-[13px] text-white-text hover:underline'
									>
										Anti-Scam Verification
									</Link>
								</li>
							</ul>
						</div>
						<div>
							<h4 className='text-primary mb-3 uppercase text-[18px] font-roboto'>
								Help
							</h4>
							<ul>
								<li className='mb-3'>
									<Link
										href={'/contact'}
										className='uppercase text-[13px] text-white-text hover:underline'
									>
										Contact us
									</Link>
								</li>
								<li className='mb-3'>
									<Link
										href={'/privacy-policy'}
										className='uppercase text-[13px] text-white-text hover:underline'
									>
										Privacy Policy
									</Link>
								</li>
								<li>
									<Link
										href={'/terms'}
										className='uppercase text-[13px] text-white-text hover:underline'
									>
										Terms & Conditions
									</Link>
								</li>
							</ul>
						</div>
					</div>
					<div className='min-w-[302px] flex flex-col gap-4'>
						<Image
							src={'/footer/house.png'}
							width={170}
							height={60}
							alt='house'
						/>
						<div className='grid grid-cols-4 gap-3'>
							<Image src={'/footer/1.svg'} width={64} height={64} alt='logo' />
							<Image src={'/footer/2.svg'} width={64} height={64} alt='logo' />
							<Image src={'/footer/3.svg'} width={64} height={64} alt='logo' />
							<Image src={'/footer/4.svg'} width={64} height={64} alt='logo' />
						</div>
						<p className='text-[#909090] text-[12px] leading-[130%]'>
							© Chainbound. All Rights Reserved. Chainbound® is a registered
							trademark. Various trademarks held by their respective owners.
						</p>
					</div>
				</div>
			</div>
		</footer>
	)
}
