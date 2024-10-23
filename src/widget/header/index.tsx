'use client'

import { Button } from '@/components/ui'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export const Header = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false)
	const pathname = usePathname()
	const toggleMenu = () => {
		setIsOpen(prev => !prev)
		document.body.classList.toggle('lock')
	}
	return (
		<header className='sticky container top-0 !mt-7 shadow-custom rounded-[4px] z-10 bg-white h-20 flex items-center justify-between'>
			<Link href='/'>
				<Image src='/logo.svg' width={212} height={31} alt='ChainBound' />
			</Link>
			<nav className='lg:hidden'>
				<ul className='flex items-center gap-5'>
					{NAV_LINKS.map(({ id, title, url }) => (
						<li
							key={id}
							className={cn(
								'text-title hover:text-primary hover:underline py-1',
								pathname === url && 'text-primary'
							)}
						>
							<Link href={url}>{title}</Link>
						</li>
					))}
				</ul>
			</nav>
			<Button asChild className='lg:hidden'>
				<Link href={'/contact'}>Book a call</Link>
			</Button>
			<button className='ml-[16px]  hidden lg:flex' onClick={toggleMenu}>
				<Image src={'/burger.svg'} height={24} width={24} alt='burger' />
			</button>
			{isOpen && (
				<div
					className='fixed inset-0 bg-[#03061A] bg-opacity-50 z-20'
					onClick={toggleMenu}
				/>
			)}
			<div
				className={`fixed top-0 right-0 w-80 md:w-full h-full py-10 px-[30px] pt-3 bg-card z-30 transform flex flex-col ${
					isOpen ? 'translate-x-0' : 'translate-x-full'
				} transition-transform duration-300 ease-in-out shadow-lg`}
			>
				<div className='flex items-center justify-between'>
					<Link href='/' className='relative md:translate-y-[3px]'>
						<Image
							src='/logo.svg'
							width={200}
							height={35}
							alt='logo'
							className='md:h- m8d:w-full'
						/>
					</Link>
					<button
						onClick={toggleMenu}
						className='text-[52px] text-secondary leading-[100%]'
					>
						&times;
					</button>
				</div>
				<nav className='flex gap-2.5 flex-col pt-10'>
					{NAV_LINKS.map(({ title, url }) => (
						<Link
							key={title}
							href={url}
							className={cn(
								'font-medium text-[24px] font-semibold leading-[116%] p-2.5 px-0 hover:underline',
								pathname === url ? 'text-primary' : ''
							)}
						>
							{title}
						</Link>
					))}
				</nav>
			</div>
		</header>
	)
}

const NAV_LINKS = [
	{
		id: 1,
		title: 'Services',
		url: '/fund',
	},
	{
		id: 2,
		title: 'About',
		url: '/about',
	},
	{
		id: 3,
		title: 'Why choose us',
		url: '/why',
	},
	{
		id: 4,
		title: 'Anti-Scam',
		url: '/anti-scam',
	},
	{
		id: 5,
		title: 'Contact',
		url: '/contact',
	},
]
