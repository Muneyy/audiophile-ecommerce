import React, { useEffect, RefObject } from 'react'

interface UseClickOutsideHandlerProps {
  buttonRef: RefObject<HTMLElement>
  modalRef: RefObject<HTMLElement>
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const useClickOutsideHandler = ({
  buttonRef,
  modalRef,
  setIsModalOpen,
}: UseClickOutsideHandlerProps) => {
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const buttonClicked =
        buttonRef.current && buttonRef.current.contains(e.target as Node)
      const outsideClicked =
        modalRef.current && !modalRef.current.contains(e.target as Node)

      if (!buttonClicked && outsideClicked) {
        setIsModalOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [buttonRef, modalRef, setIsModalOpen])
}

export default useClickOutsideHandler
