const Announcements = () => {
  return (
    <div className='bg-white p-4 rounded-md'>
      <div className='flex items-center justify-between'>
        <h1 className='text-xl font-semibold'>Announcements</h1>
        <span className='text-xs text-gray-400 cursor-pointer'>View All</span>
      </div>
      <div className='flex flex-col gap-4 mt-4'>
        {/* First Announcement */}
        <div className='bg-yellowLight rounded-md p-4'>
          <div className='flex items-center justify-between'>
            <h2 className='font-medium'>Project Deadline Extended</h2>
            <span className='text-xs text-gray-400 bg-white rounded-md px-1 py-1'>
              2025-01-01
            </span>
          </div>
          <p className='text-sm text-gray-400 mt-1'>
            The project deadline has been extended by one week. Please adjust
            your schedules accordingly.
          </p>
        </div>

        {/* Second Announcement */}
        <div className='bg-pinkLight rounded-md p-4'>
          <div className='flex items-center justify-between'>
            <h2 className='font-medium'>Team Meeting Update</h2>
            <span className='text-xs text-gray-300 bg-white rounded-md px-1 py-1'>
              2025-01-05
            </span>
          </div>
          <p className='text-sm text-gray-400 mt-1'>
            The team meeting has been rescheduled for next Tuesday at 2 PM.
            Don’t forget to attend!
          </p>
        </div>

        {/* Third Announcement */}
        <div className='bg-blueLight rounded-md p-4'>
          <div className='flex items-center justify-between'>
            <h2 className='font-medium'>New Policy Implementation</h2>
            <span className='text-xs text-gray-400 bg-white rounded-md px-1 py-1'>
              2025-01-10
            </span>
          </div>
          <p className='text-sm text-gray-400 mt-1'>
            A new company policy will be implemented from the 10th of January.
            Please review the details.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Announcements
