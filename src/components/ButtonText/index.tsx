import { FC } from "react"
import { Link } from "react-router-dom"
import './index.scss'

interface IButtonText {
  type?: 'button' | 'link' | 'route-link',
  content?: 'text' | 'icon'
  width?: number,
  label?: string,
  to?: string,
  disabled?: boolean,
  className?: string | undefined,
  rel?: string | undefined,
  target?: React.HTMLAttributeAnchorTarget | undefined,
  onClick?: React.MouseEventHandler | undefined
}

const ButtonText: FC<IButtonText> = ({ content, width, type, label, to, children, target, rel, onClick, className, disabled }) => {
  return (
    <>
      { type === 'button'
        ? (
          <button disabled={disabled} aria-disabled={disabled ? 'true' : 'false'} className={'button-text' + (disabled ? ' disabled' : '') + ((content ?? 'text') === 'icon' ? ' button-icon' : '') + ' ' + (className ?? '')} aria-label={label} onClick={onClick} style={{ width: width ?? 'max-content' }}>
            {children}
          </button> 
        )
        : type === 'route-link'
          ? (
            <Link to={to ?? '/'} className={'button-text' + ((content ?? 'text') === 'icon' ? ' button-icon' : '') + ' ' + (className ?? '')} rel={rel} target={target} aria-label={label} onClick={onClick} style={{ width: width ?? 'max-content' }}>
              {children}
            </Link> 
          )
          : (
            <a href={to} className={'button-text' + ((content ?? 'text') === 'icon' ? ' button-icon' : '') + ' ' + (className ?? '')} rel={rel} target={target} aria-label={label} onClick={onClick} style={{ width: width ?? 'max-content' }}>
              {children}
            </a> 
          )
      }
    </>
  )
}

export default ButtonText
