import Image from 'next/image'
import { HTMLAttributes } from 'react'

export function IgniteLabReact(props: HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props}>
      <Image
        src="/assets/logos/ignite-lab-react.svg"
        width="237"
        height="34"
        alt="Vetor Gráfico"
        objectFit="cover"
        quality={100}
      />
    </div>
  )
}
