import Image, { type ImageProps } from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'
import logoAirbnb from '@/images/logos/airbnb.svg'
import logoFacebook from '@/images/logos/facebook.svg'
import logoPlanetaria from '@/images/logos/planetaria.svg'
import logoStarbucks from '@/images/logos/starbucks.svg'
import image1 from '@/images/photos/photo_1.jpeg'
import image2 from '@/images/photos/photo_2.jpeg'
import image3 from '@/images/photos/photo_3.jpeg'
import image4 from '@/images/photos/photo_4.jpeg'
import image5 from '@/images/photos/photo_5.jpeg'
import event1 from '@/images/photos/event_1.jpeg'
import event2 from '@/images/photos/event_2.jpeg'
import event3 from '@/images/photos/event_3.jpeg'
import social1 from '@/images/photos/social_1.jpeg'
import social2 from '@/images/photos/social_2.jpeg'
import social3 from '@/images/photos/social_3.jpeg'
import ketua from '@/images/photos/portrait.jpg'
import { formatDate } from '@/lib/formatDate'

function SocialLink({
  icon: Icon,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
  icon: React.ComponentType<{ className?: string }>
}) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800 border-4 border-green-500',
              rotations[imageIndex % rotations.length],
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover rounded-xl"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default async function Home() {

  return (
    <>
      <Container className="mt-9">
        <div className="max-w-4xl">
          <h1 className="text-4xl font-bold tracking-tight text-green-800 sm:text-5xl dark:text-zinc-100">
            Ngariung Sadulur Sahobi (NgaSso)
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            Selamat datang di web resmi komunitas PPBI kota Bogor. Konten web ini dikelola oleh pengurus PPBI kota Bogor sebagai media informasi dan komunikasi khususnya untuk anggota PPBI kota Bogor meliputi informasi kegiatan, informasi keanggotaan, informasi keuangan, informasi kepengurusan, informasi acara dan informasi lainnya yang berkaitan dengan kegiatan PPBI kota Bogor.
          </p>
          <div className="mt-6 flex gap-6">
            {/* <SocialLink href="#" aria-label="Follow on X" icon={XIcon} /> */}
            <SocialLink
              href="#"
              aria-label="Follow on Instagram"
              icon={InstagramIcon}
            />
            {/* <SocialLink
              href="#"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="#"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            /> */}
          </div>
        </div>
      </Container>
      <Photos />
      <Container className="mt-24 md:mt-28">
        <h3 className='text-2xl font-bold mt-10 mb-10'>Sambutan Ketua PPBI Kota Bogor</h3>
        <div className='flex justify-center'>
          <div>
            <Image
                  src={ketua}
                  alt=""
                  sizes=""
                  className="object-cover rounded-full max-w-28"
                />
          </div>
          <div className='ml-4 text-lg'>
          it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
          </div>
        </div>
      </Container>
      <Container className="mt-24 md:mt-28">
        <h3 className='text-2xl font-bold mt-10 mb-10'>Event</h3>
        <div className="grid grid-cols-3 gap-4">
          <div className="gap-4 mb-10">
            <div>
              <Image
                src={event1}
                alt=""
                sizes=""
                className="object-cover rounded-xl max-w-80"
              />
            </div>
            <div className='-mt-20 text-white text-xl p-4 font-bold'>Event Selengkapnya</div>
          </div>
          <div className="gap-4 mb-10">
            <div>
              <Image
                src={event2}
                alt=""
                sizes=""
                className="object-cover rounded-xl max-w-80"
              />
            </div>
            <div className='-mt-20 text-white text-xl p-4 font-bold'>Event Selengkapnya</div>
          </div>
          <div className="gap-4 mb-10">
            <div>
              <Image
                src={event3}
                alt=""
                sizes=""
                className="object-cover rounded-xl max-w-80"
              />
            </div>
            <div className='-mt-20 text-white text-xl p-4 font-bold'>Event Selengkapnya</div>
          </div>
        </div>
      </Container>
      <Container>
        <h3 className='text-2xl font-bold mt-10 mb-10'>Kegiatan Sosial</h3>
        <div className="grid grid-cols-3 gap-4">
          <div className="flex gap-4 mb-10">
            <div>
              <Image
                src={social1}
                alt=""
                sizes=""
                className="object-cover rounded-xl max-w-80"
              />
            </div>
            <div className='-mt-20 text-white text-xl p-4 font-bold'>Event Selengkapnya</div>
          </div>
          <div className="flex gap-4 mb-10">
            <div>
              <Image
                src={social2}
                alt=""
                sizes=""
                className="object-cover rounded-xl max-w-80"
              />
            </div>
            <div className='-mt-20 text-white text-xl p-4 font-bold'>Event Selengkapnya</div>
          </div>
          <div className="flex gap-4 mb-10">
            <div>
              <Image
                src={social3}
                alt=""
                sizes=""
                className="object-cover rounded-xl max-w-80"
              />
            </div>
            <div className='-mt-20 text-white text-xl p-4 font-bold'>Event Selengkapnya</div>
          </div>
        </div>
        </Container>
    </>
  )
}
