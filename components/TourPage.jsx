'use client'
import TourList from '@/components/TourList'
import { getAllTours } from '@/utils/actions'
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'

const TourPage = () => {
  const [searchValue, setSearchValue] = useState('')
  const { data, isPending } = useQuery({
    queryKey: ['tours', searchValue],
    queryFn: () => getAllTours(searchValue),
  })

  return (
    <>
      <form action='' className='max-w-lg mb-12'>
        <div className='join w-ful'>
          <input
            type='text'
            placeholder='enter city or countre here...'
            name='search'
            className='input input-bordered join-item w-full'
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            required
          />
          <button
            className='btn btn-primary join-item'
            type='button'
            disabled={isPending}
            onClick={() => setSearchValue('')}
          >
            {isPending ? 'please wait...' : 'reset'}
          </button>
        </div>
      </form>
      {isPending ? <span className='loading'></span> : <TourList data={data} />}
    </>
  )
}

export default TourPage
