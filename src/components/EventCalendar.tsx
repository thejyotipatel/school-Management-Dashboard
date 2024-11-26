'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

type ValuePiece = Date | null

type Value = ValuePiece | [ValuePiece, ValuePiece]

// TEMPORARY
// const events = [
//   {
//     id: 1,
//     title: 'Project Meeting',
//     time: '10:00 AM - 12:00 PM',
//     description: 'Discuss project progress, deadlines, and team assignments.',
//     date: '2024-11-20', // YYYY-MM-DD format
//     location: 'Conference Room A',
//   },
//   {
//     id: 2,
//     title: 'Client Presentation',
//     time: '2:00 PM - 4:00 PM',
//     description: 'Present the final design to the client and gather feedback.',
//     date: '2024-11-21', // YYYY-MM-DD format
//     location: 'Zoom Meeting',
//   },
//   {
//     id: 3,
//     title: 'Team Building Activity',
//     time: '1:00 PM - 3:00 PM',
//     description: 'Interactive session for team bonding and problem-solving.',
//     date: '2024-11-22', // YYYY-MM-DD format
//     location: 'Outdoor Park',
//   },
// ]

const EventCalendar = () => {
  const [value, onChange] = useState<Value>(new Date())

  const router = useRouter()

  useEffect(() => {
    if (value instanceof Date) {
      router.push(`?date=${value.toLocaleDateString('en-IN')}`)
    }
  }, [value, router])

  return <Calendar onChange={onChange} value={value} />
}

export default EventCalendar
