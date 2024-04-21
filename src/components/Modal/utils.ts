import { useEffect, useState } from "react"

export default function useWidth(): number {
  const [width, setWidth] = useState(window.innerWidth * (window.visualViewport?.scale || 1));

  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth * (window.visualViewport?.scale || 1));
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize);
  })

  return width
}