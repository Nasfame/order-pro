const Link = ({ Class, Content, to }) => {
  return (
    <a className={Class} href={to}>
      {Content}
    </a>
  )
}

export default Link
