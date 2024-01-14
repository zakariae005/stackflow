import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import RenderTag from './RenderTag'

const RightSidebar = () => {
    const hotQuestions = [
        { _id: '1', title: 'zakariae lakhdar is the best person in the earth'},
        { _id: '2', title: 'zakariae lakhdar is the best person in the earth'},
        { _id: '3', title: 'zakariae lakhdar is the best person in the earth'},
        { _id: '4', title: 'zakariae lakhdar is the best person in the earth'},
    ]

    const popularTags = [
        { _id: '1', name: "a", totalQuestions: 5},
        { _id: '2', name: "javascript", totalQuestions: 5},
        { _id: '3', name: "javascript", totalQuestions: 5},
        { _id: '4', name: "javascript", totalQuestions: 5},
        { _id: '5', name: "javascript", totalQuestions: 5},
    ]

  return (
    <section className="background-light900_dark200 light-border custom-scrollbar sticky right-0 top-0 flex h-screen w-[350px] flex-col  overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden ">
      <div>
        <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
            {hotQuestions.map((question) => (
                <Link
                    href={`/questions/${question._id}`}
                    key={question._id}
                    className="flex cursor-pointer items-center justify-between gap-7"
                >
                <p className="body-medium text-dark500_light700">{question.title}</p>
                <Image 
                    src='/assets/icons/chevron-right.svg'
                    alt="chevron"
                    width={20}
                    height={20}
                    className="invert-colors"
                />
                </Link>
            ))}
        </div>
      </div>
      <div className="mt-16">
      <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
        <div className="mt-7 flex flex-col gap-4">
            {popularTags.map((tag) => (
                <RenderTag 
                    key={tag._id}
                    _id={tag._id}
                    name={tag.name}
                    totalQuestions={tag.totalQuestions}
                    showCount
                />
            ))}
        </div>
    </div>
    </section>
  )
}

export default RightSidebar