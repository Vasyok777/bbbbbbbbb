'use client'

import { Button, Card, Input, Textarea } from '@/components/ui'
import { SuccessForm } from '@/widget'
import emailjs from '@emailjs/browser'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

interface IFormData {
	email: string
	company_name: string
	message: string
}

export const AntiForm = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<IFormData>()
	const [isSubmitting, setIsSubmitting] = useState(false)
	const [isSuccess, setIsSuccess] = useState(false)

	const onSubmit = (data: IFormData) => {
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
		<>
			<Card className='p-10 bg-[#F7F8FA] md:p-5'>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className='mb-4'>
						<label
							htmlFor='email'
							className='mb-1.5 block text-accent text-[16px]'
						>
							Email<span className='text-primary'>*</span>
						</label>
						<Input type='email' {...register('email', { required: true })} />
						{errors.email && (
							<p className='text-dangerous mt-2.5 text-[14px] leading-[100%]'>
								This field is required
							</p>
						)}
					</div>
					<div className='mb-4'>
						<label
							htmlFor='company_name'
							className='mb-1.5 block text-accent text-[16px]'
						>
							Your company name<span className='text-primary'>*</span>
						</label>
						<Input {...register('company_name', { required: true })} />
						{errors.company_name && (
							<p className='text-dangerous mt-2.5 text-[14px] leading-[100%]'>
								This field is required
							</p>
						)}
					</div>
					<div className='mb-4'>
						<label
							htmlFor='message'
							className='mb-1.5 block text-accent text-[16px]'
						>
							Your message<span className='text-primary'>*</span>
						</label>
						<p className='text-[13px] text-[#537393] leading-[130%] mb-1'>
							Please provide information regarding who you have been contacted
							by, payment addresses, materials sent to you, etc.
						</p>
						<Textarea
							className='resize-none'
							{...register('message', { required: true })}
						/>
						{errors.message && (
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
		</>
	)
}
