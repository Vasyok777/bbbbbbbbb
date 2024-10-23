import {
	Button,
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from '@/components/ui'
import Image from 'next/image'

export function SuccessForm({ isSuccess = false, setIsSuccess }: any) {
	return (
		<Dialog open={isSuccess} onOpenChange={setIsSuccess}>
			<DialogContent className='md:w-[90%]  rounded-[12px]'>
				<DialogHeader className='flex justify-center items-center'>
					<Image
						src={'/success.svg'}
						width={64}
						height={64}
						className='mb-6'
						alt='Success'
					/>
					<DialogTitle className='text-[24px] font-roboto font-bold'>
						Message successfully sent
					</DialogTitle>
					<DialogDescription>Please, check your email</DialogDescription>
				</DialogHeader>
				<DialogFooter>
					<DialogClose asChild>
						<Button
							onClick={() => setIsSuccess(false)}
							className='w-max mx-auto'
						>
							OK
						</Button>
					</DialogClose>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	)
}
