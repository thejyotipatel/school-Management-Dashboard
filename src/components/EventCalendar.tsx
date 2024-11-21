'use client'

import Image from 'next/image'
import { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

type ValuePiece = Date | null

type Value = ValuePiece | [ValuePiece, ValuePiece]

// TEMPORARY
const events = [
  {
    id: 1,
    title: 'Project Meeting',
    time: '10:00 AM - 12:00 PM',
    description: 'Discuss project progress, deadlines, and team assignments.',
    date: '2024-11-20', // YYYY-MM-DD format
    location: 'Conference Room A',
  },
  {
    id: 2,
    title: 'Client Presentation',
    time: '2:00 PM - 4:00 PM',
    description: 'Present the final design to the client and gather feedback.',
    date: '2024-11-21', // YYYY-MM-DD format
    location: 'Zoom Meeting',
  },
  {
    id: 3,
    title: 'Team Building Activity',
    time: '1:00 PM - 3:00 PM',
    description: 'Interactive session for team bonding and problem-solving.',
    date: '2024-11-22', // YYYY-MM-DD format
    location: 'Outdoor Park',
  },
]

const EventCalendar = () => {
  const [value, onChange] = useState<Value>(new Date())

  return (
    <div className='bg-white p-4 rounded-md'>
      <Calendar onChange={onChange} value={value} />
      <div className='flex items-center justify-between'>
        <h1 className='text-xl font-semibold my-4'>Events</h1>
        <Image src='/moreDark.png' alt='' width={20} height={20} />
      </div>
      <div className='flex flex-col gap-4'>
        {events.map((event) => (
          <div
            className='p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-blueDark even:border-t-pinkDark'
            key={event.id}
          >
            <div className='flex items-center justify-between'>
              <h1 className='font-semibold text-gray-600'>{event.title}</h1>
              <span className='text-gray-300 text-xs'>{event.time}</span>
            </div>
            <p className='mt-2 text-gray-400 text-sm'>{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default EventCalendar
