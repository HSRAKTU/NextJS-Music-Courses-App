'use client'
import Link from 'next/link'
import coursesData from '../data/music_courses.json'
import Image from "next/image";
import React from 'react';
import { BackgroundGradient } from './ui/background-gradient';
import { CardBody, CardContainer, CardItem } from './ui/3d-card'

interface Course{
    id: number,
    title: string,
    slug: string,
    description: string,
    price: number,
    instructor: string,
    isFeatured: boolean
}

function FeaturedCourses() {
   const featuredCourses =  coursesData.courses.filter((course:Course )=> course.isFeatured)
    
  return (
    <div className="py-12 bg-gray-900">
        <div>
            <div className="text-center">
                <h2 className="text-base text-purple-500 font-semibold tracking-wide uppercase">FEATURED COURSES</h2>
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Learn With the Best</p>
            </div>
        </div>
        <div className="mt-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                {featuredCourses.map((course:Course) => (
                    <div key={course.id}className="flex justify-center">
                        <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                        <CardContainer className="inter-var pb-4">
                          <CardBody
                            className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow ">
                            <CardItem translateZ="50" className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                              {course.title}
                            </CardItem>
                            <CardItem as="p" translateZ="60" className="text-lg text-neutral-600 dark:text-neutral-400 flex-grow">
                              {course.description}
                            </CardItem>
                              <CardItem translateZ={20} as="button" className="px-4 py-2 rounded-xl text-l font-normal  dark:text-white">
                              <Link href={`/courses/${course.slug}`}>
                                Learn More
                                </Link>
                              </CardItem>
                          </CardBody>
                        </CardContainer>
                        </BackgroundGradient>
                    </div>
                ))}
            </div>
        </div>
        <div className="mt-20 text-center">
            <Link href={"/courses"}>
                <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                  View all courses
                </button>
            </Link>
        </div>
    </div>
  )
}

export default FeaturedCourses