'use client'
import React, { useEffect, useRef, useState } from 'react'
import styles from '@/styles/accordion.module.scss'

export default function Accordion({
  title,
  content,
}: {
  title: string
  content: string | React.ReactNode
}) {
  const [isOpen, setIsOpen] = useState(false)
  const [isAccordionGroup, setIsAccordionGroup] = useState(false)
  const accordionRef = useRef<HTMLDivElement>(null)

  const toggleAccordion = () => {
    if (isAccordionGroup && accordionRef.current?.parentElement) {
      const children = Array.from(accordionRef.current.parentElement.children)

      if (children.length > 0) {
        children.forEach((child) => {
          console.log(child.classList)
          if (child !== accordionRef.current) {
            child.classList.remove(styles.open)
            return
          }
          child.classList.add(styles.open)
        })
      }
      return
    }
    setIsOpen((prev) => !prev)
  }

  useEffect(() => {
    const hasAccordionGroupParent =
      accordionRef.current?.parentElement?.className.includes('accordionGroup')
    if (hasAccordionGroupParent) {
      setIsAccordionGroup(true)
    }
  }, [])

  return (
    <div
      className={`${styles.accordion} ${isOpen && styles.open}`}
      ref={accordionRef}
    >
      <div
        role='button'
        className={styles.accordion__header}
        onClick={toggleAccordion}
      >
        {title}
      </div>
      <div className={styles.accordion__wrapper}>
        <div className={styles.accordion__content}>{content}</div>
      </div>
    </div>
  )
}
