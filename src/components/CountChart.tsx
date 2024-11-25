'use client'
import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts'
import { FaFemale, FaMale } from 'react-icons/fa'

const CountChart = ({ boys, girls }: { boys: number; girls: number }) => {
  const data = [
    {
      name: 'Total',
      count: boys + girls,
      fill: 'white',
    },
    {
      name: 'Girls',
      count: girls,
      fill: '#FFB4C2',
    },
    {
      name: 'Boys',
      count: boys,
      fill: '#667BC6',
    },
  ]
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
