'use client'

import { Check } from '@/components/icons'
import { Button, Card, Input } from '@/components/ui'
import { SuccessForm } from '@/widget'
import emailjs from '@emailjs/browser'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

interface IFormData {
	email: string
	company_name: string
	message: string
	website_url: string
	country_or_region?: string
	interested?: any
	onboard?: any
	annual_revenue: string | number
	first_name: string
	last_name: string
	telegram_link: string
	start_working: string
}

export const HomeForm = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<any>()
	const [isSubmitting, setIsSubmitting] = useState(false)
	const [isSuccess, setIsSuccess] = useState(false)

	const onSubmit = (data: any) => {
		console.log(data)
		setIsSubmitting(true)
		emailjs
			.send(
				'service_lt263yx',
				'template_mp47lcq',
				{
					email: data.email,
					company_name: data.company_name,
					message: data.message,
				},
				'2B8TNoQA0DnBTOdYk'
			)
			.then(
				() => {
					console.log('SUCCESS!')
					reset()
					setIsSubmitting(false)
					setIsSuccess(true)
				},
				error => {
					console.log('FAILED...', error.text)
					setIsSubmitting(false)
				}
			)
	}

	return (
		<div className='container py-10'>
			<h2 className='uppercase text-center mb-8'>Get in touch</h2>
			<div className='grid grid-cols-3 md:grid-cols-1 gap-5'>
				<Card className='flex flex-col items-center justify-center gap-2'>
					<div className='flex justify-center items-center rounded-[4px] bg-title w-8 h-8'>
						<Check />
					</div>
					<h4 className='text-title uppercase font-roboto font-bold'>
						General Questions
					</h4>
				</Card>
				<Card className='flex flex-col items-center justify-center gap-2'>
					<div className='flex justify-center items-center rounded-[4px] bg-title w-8 h-8'>
						<Check />
					</div>
					<h4 className='text-title uppercase font-roboto font-bold'>
						Free consultation
					</h4>
				</Card>
				<Card className='flex flex-col items-center justify-center gap-2'>
					<div className='flex justify-center items-center rounded-[4px] bg-title w-8 h-8'>
						<Check />
					</div>
					<h4 className='text-title uppercase font-roboto font-bold'>
						Request a proposal
					</h4>
				</Card>
			</div>
			<Card className='p-10 md:p-5 bg-transparent'>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className='grid grid-cols-2 md:grid-cols-1 gap-4'>
						<div className='mb-4'>
							<label
								htmlFor='first_name'
								className='mb-1.5 block text-accent text-[16px]'
							>
								First name<span className='text-primary'>*</span>
							</label>
							<Input
								className='bg-[#F7F8FA]'
								{...register('first_name', { required: true })}
							/>
							{errors.first_name && (
								<p className='text-dangerous mt-2.5 text-[14px] leading-[100%]'>
									This field is required
								</p>
							)}
						</div>
						<div className='mb-4'>
							<label
								htmlFor='last_name'
								className='mb-1.5 block text-accent text-[16px]'
							>
								Last name<span className='text-primary'>*</span>
							</label>
							<Input
								className='bg-[#F7F8FA]'
								{...register('last_name', { required: true })}
							/>
							{errors.last_name && (
								<p className='text-dangerous mt-2.5 text-[14px] leading-[100%]'>
									This field is required
								</p>
							)}
						</div>
					</div>

					<div className='grid grid-cols-3 md:grid-cols-1 gap-4'>
						<div className='mb-4'>
							<label
								htmlFor='email'
								className='mb-1.5 block text-accent text-[16px]'
							>
								Email<span className='text-primary'>*</span>
							</label>
							<Input
								className='bg-[#F7F8FA]'
								type='email'
								{...register('email', { required: true })}
							/>
							{errors.email && (
								<p className='text-dangerous mt-2.5 text-[14px] leading-[100%]'>
									This field is required
								</p>
							)}
						</div>
						<div className='mb-4'>
							<label
								htmlFor='telegram_link'
								className='mb-1.5 block text-accent text-[16px]'
							>
								Telegram Link<span className='text-primary'>*</span>
							</label>
							<Input
								className='bg-[#F7F8FA]'
								{...register('telegram_link', { required: true })}
							/>
							{errors.telegram_link && (
								<p className='text-dangerous mt-2.5 text-[14px] leading-[100%]'>
									This field is required
								</p>
							)}
						</div>
						<div className='mb-4'>
							<label
								htmlFor='website_url'
								className='mb-1.5 block text-accent text-[16px]'
							>
								Website URL<span className='text-primary'>*</span>
							</label>
							<Input
								className='bg-[#F7F8FA]'
								{...register('website_url', { required: true })}
							/>
							{errors.website_url && (
								<p className='text-dangerous mt-2.5 text-[14px] leading-[100%]'>
									This field is required
								</p>
							)}
						</div>
					</div>
					<div className='grid grid-cols-2 gap-4 md:grid-cols-1 mb-4'>
						<div>
							<p className='block text-accent text-[16px] mb-3'>
								How soon are you looking to starting working with an agency?
							</p>
							<div className='flex items-center gap-1 mb-1 '>
								<input
									type='radio'
									value={'In less than a week'}
									{...register('start_working')}
									id='interested-selling'
								/>
								<label
									htmlFor='interested-selling'
									className='text-accent hover:cursor-pointer text-[14px]'
								>
									In less than a week
								</label>
							</div>
							<div className='flex items-center gap-1 mb-1'>
								<input
									type='radio'
									value={'1 week - 1 month'}
									{...register('interested')}
									id='interested-month'
								/>
								<label
									htmlFor='interested-investment'
									className='text-accent hover:cursor-pointer text-[14px]'
								>
									1 week - 1 month
								</label>
							</div>
							<div className='flex items-center gap-1 mb-1'>
								<input
									type='radio'
									value={'In 1-3 months'}
									{...register('interested')}
									id='interested-In'
								/>
								<label
									htmlFor='interested-In'
									className='text-accent hover:cursor-pointer text-[14px]'
								>
									In 1-3 months
								</label>
							</div>
							<div className='flex items-center gap-1'>
								<input
									type='radio'
									value={'In more than 3 months'}
									{...register('interested')}
									id='interested-more'
								/>
								<label
									htmlFor='interested-more'
									className='text-accent hover:cursor-pointer text-[14px]'
								>
									In more than 3 months
								</label>
							</div>
						</div>
					</div>
					<div className='mb-4'>
						<label
							htmlFor='budget'
							className='mb-1.5 block text-accent text-[16px]'
						>
							Expected Monthly Marketing Budget*
							<span className='text-primary'></span>
						</label>
						<Input
							className='bg-[#F7F8FA]'
							{...register('budget', { required: true })}
						/>
						{errors.budget && (
							<p className='text-dangerous mt-2.5 text-[14px] leading-[100%]'>
								This field is required
							</p>
						)}
					</div>
					<p className='text-[14px] text-accent mb-4'>
						By submitting this form, you consent to receive communications from
						Chainbound. You can unsubscribe at any time, and we do not spam.
					</p>
					<Button disabled={isSubmitting}>
						{isSubmitting ? 'Submitting...' : 'Submit'}
					</Button>
				</form>
			</Card>

			<SuccessForm isSuccess={isSuccess} setIsSuccess={setIsSuccess} />
		</div>
	)
}
