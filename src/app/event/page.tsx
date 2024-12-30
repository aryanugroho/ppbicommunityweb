import { type Metadata } from 'next'
import Image from 'next/image'

import { Container } from '@/components/Container'
import event1 from '@/images/photos/event_1.jpeg'
import event2 from '@/images/photos/event_2.jpeg'
import event3 from '@/images/photos/event_3.jpeg'


export const metadata: Metadata = {
  title: 'About',
  description:
    'I’m Spencer Sharp. I live in New York City, where I design the future.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="max-w-4xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Event
          </h1>
          <div className="mt-8 space-y-8">
            <div>
              <h3 className='text-2xl font-bold pt-6 pb-6 mb-4 border-b-2'>Ngasso 2</h3>
              <div className='grid grid-cols-4 gap-8'>
                <Image
                  src={event1}
                  alt=""
                  sizes=""
                  className="object-cover rounded-xl"
                />
                <Image
                  src={event2}
                  alt=""
                  sizes=""
                  className="object-cover rounded-xl"
                />
                <Image
                  src={event3}
                  alt=""
                  sizes=""
                  className="object-cover rounded-xl"
                />
                <Image
                  src={event2}
                  alt=""
                  sizes=""
                  className="object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
          <div className="mt-8 space-y-8">
            <div>
              <h3 className='text-2xl font-bold pt-6 pb-6 mb-4 border-b-2'>Ngasso 1</h3>
              <div className='grid grid-cols-4 gap-8'>
                <Image
                  src={event1}
                  alt=""
                  sizes=""
                  className="object-cover rounded-xl"
                />
                <Image
                  src={event2}
                  alt=""
                  sizes=""
                  className="object-cover rounded-xl"
                />
                <Image
                  src={event3}
                  alt=""
                  sizes=""
                  className="object-cover rounded-xl"
                />
                <Image
                  src={event2}
                  alt=""
                  sizes=""
                  className="object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
      </div>
    </Container>
  )
}
