import { type Metadata } from 'next'
import Image from 'next/image'

import { Container } from '@/components/Container'
import event1 from '@/images/photos/event_1.jpeg'
import event2 from '@/images/photos/event_2.jpeg'
import event3 from '@/images/photos/event_3.jpeg'
import ketua from '@/images/photos/portrait.jpg'


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
            Pengurus PPBI Kota Bogor 2024-2029
          </h1>
          <div className="mt-8 space-y-8">
            <div>
              <div className='flex justify-center gap-8 mb-6'>
                <div className='justify-items-center'>
                  <Image
                    src={ketua}
                    alt=""
                    sizes=""
                    className="object-cover rounded-full max-w-28"
                  />
                  <h5>Ketua PPBI Kota Bogor</h5>
                </div>
              </div>
              <div className='flex justify-center gap-8 mb-6'>
                <div className='justify-items-center'>
                  <Image
                    src={ketua}
                    alt=""
                    sizes=""
                    className="object-cover rounded-full max-w-28"
                  />
                  <h5>Wakil</h5>
                </div>
              </div>
              <div className='flex justify-center gap-8 mb-6'>
                <div className='justify-items-center'>
                  <Image
                    src={ketua}
                    alt=""
                    sizes=""
                    className="object-cover rounded-full max-w-28"
                  />
                  <h5>Seksi 1</h5>
                </div>
                <div className='justify-items-center'>
                  <Image
                    src={ketua}
                    alt=""
                    sizes=""
                    className="object-cover rounded-full max-w-28"
                  />
                  <h5>Seksi 2</h5>
                </div>
                <div className='justify-items-center'>
                  <Image
                    src={ketua}
                    alt=""
                    sizes=""
                    className="object-cover rounded-full max-w-28"
                  />
                  <h5>Seksi 3</h5>
                </div>
                <div className='justify-items-center'>
                  <Image
                    src={ketua}
                    alt=""
                    sizes=""
                    className="object-cover rounded-full max-w-28"
                  />
                  <h5>Seksi 4</h5>
                </div>
              </div>
            </div>
          </div>
      </div>
    </Container>
  )
}
