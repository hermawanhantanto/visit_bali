import Spinner from '@/components/shared/Spinner'


const Loading = () => {
  return (
    <div className='flex min-h-screen justify-center items-center'>
        <Spinner
            size={50}
            color='abu-abu'
        />
    </div>
  )
}

export default Loading