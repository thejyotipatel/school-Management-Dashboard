import EventList from './EventList'

import Image from 'next/image'
import 'react-calendar/dist/Calendar.css'
import EventCalendar from './EventCalendar'

const EventCalendarContainer = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined }
}) => {
  const { dateParam } = await searchParams
  return (
    <div className='bg-white p-4 rounded-md'>
      <EventCalendar />
      <div className='flex items-center justify-between'>
        <h1 className='text-xl font-semibold my-4'>Events</h1>
        <Image src='/moreDark.png' alt='' width={20} height={20} />
      </div>
      <div className='flex flex-col gap-4'>
        <EventList dateParam={dateParam} />
      </div>
    </div>
  )
}
export default EventCalendarContainer
