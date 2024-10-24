import './MyLabel.css'

interface Props {
  /**
   * Text to display
   */
  label: string,

  /**
   * Label size
   */
  size?: 'normal' | 'h1' | 'h2' | 'h3',
  /**
   * Capitalize
   */
  allCaps?: boolean,
  /**
   * Text color
   */
  color?: 'text-primary' | 'text-secondary' | 'text-tertiary',
  /**
   * Background color
   */
  backColor?: string,
}

export function MyLabel({ 
  label, 
  size = 'normal', 
  allCaps = false, 
  color = 'text-primary',
  backColor = '#FFF'
}: Props) {
  return (
    <span 
      className={`${size} ${color} label`}
      style={{
        backgroundColor: backColor,
      }}
    >{ allCaps ? label.toUpperCase() : label }</span>
  )
}

