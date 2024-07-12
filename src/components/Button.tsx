interface Props {
	children: string,
	color?: 'primary' | 'secondary',
	onClickEvnt: () => void
}

const Button = ({children, color='primary', onClickEvnt}: Props) => {
  return (
	<button onClick={onClickEvnt} className={'btn btn-'+color}>{children}</button>
  )
}

export default Button