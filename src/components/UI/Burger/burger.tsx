import React from "react"
import * as styles from "./burger.module.css"
import cn from "classnames"

interface BurgerProps {
  isOpen: boolean
  setIsOpen: (value: boolean) => void
}

const Burger = ({ isOpen, setIsOpen }: BurgerProps) => {
  const toggleOpen = (value: boolean) => {
    setIsOpen(value)
  }
  return (
    <div
      className={cn(styles.burger, {
        [styles.open]: isOpen,
      })}
      onClick={() => {
        toggleOpen(!isOpen)
      }}
    >
      <div className={styles.burger__line}></div>
    </div>
  )
}

export default Burger
