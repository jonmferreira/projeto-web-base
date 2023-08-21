import { useMemo } from "react"

interface ErrorProps {
  message: string | undefined
}
export const Errors = ({ message }: ErrorProps) => {
  const mensagem = useMemo(() => {
    if (message !== 'Required') {
      return message
    } else {
      return 'Campo Obrigatório'
    }
  }, [message])
  return (
      <span 
        className="text-red-500 mt-1 text-xs" 
        style={{ wordBreak: 'break-word' }}
      >
        {mensagem}
      </span>
  )
}
