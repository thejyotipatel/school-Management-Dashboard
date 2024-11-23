'use client'
import Image from 'next/image'
import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts'
import { FaFemale, FaMale } from 'react-icons/fa'

const data = [
  {
    name: 'Total',
    count: 106,
    fill: 'white',
  },
  {
    name: 'Girls',
    count: 53,
    fill: '#FFB4C2',
  },
  {
    name: 'Boys',
    count: 53,
    fill: '#667BC6',
  },
]

const CountChart = ({ boys, girls }: { boys: number; girls: number }) => {
  return (
    <div className='relative w-full h-[75%]'>
      <ResponsiveContainer>
        <RadialBarChart
          cx='50%'
          cy='50%'
          innerRadius='40%'
          outerRadius='100%'
          barSize={32}
          data={data}
        >
          <RadialBar background dataKey='count' />
        </RadialBarChart>
      </ResponsiveContainer>
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  flex'>
        <span className='text-4xl text-blueDark'>
          <FaMale />
        </span>
        <span className='text-4xl text-pinkDark'>
          <FaFemale />
        </span>
      </div>
    </div>
  )
}

export default CountChart
