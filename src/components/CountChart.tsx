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

const CountChart = () => {
  return (
    <div className='bg-white rounded-xl w-full h-full p-4'>
      {/* TITLE */}
      <div className='flex justify-between items-center'>
        <h1 className='text-lg font-semibold'>Students</h1>
        <Image src='/moreDark.png' alt='' width={20} height={20} />
      </div>
      {/* CHART */}
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
        {/* <Image src='/maleFemale.png' alt='' width={50} height={50} /> */}
      </div>
      {/* BOTTOM */}
      <div className='flex justify-center gap-16'>
        <div className='flex flex-col gap-1'>
          <div className='w-5 h-5 bg-blueDark rounded-full' />
          <h1 className='font-bold'>1,234</h1>
          <h2 className='text-xs text-gray-300'>Boys (55%)</h2>
        </div>
        <div className='flex flex-col gap-1'>
          <div className='w-5 h-5 bg-pinkDark rounded-full' />
          <h1 className='font-bold'>1,234</h1>
          <h2 className='text-xs text-gray-300'>Girls (45%)</h2>
        </div>
      </div>
    </div>
  )
}

export default CountChart
