import { FC } from "react"

interface Props {
    children: React.ReactNode;
}
  

export const DarkLayout: FC<Props> = ({ children }) => {
  return (
    <div style={{
        backgroundColor: '#00000020',
        borderRadius: '10px',
        padding: '20px',
    }}>
        <h3>dark layout</h3>
        { children }
    </div>
  )
}
