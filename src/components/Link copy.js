// import { Form, Button } from 'react-bootstrap'
// import LinkContext from '../context/LinkContext'
// import { useContext } from 'react'
// import { NavLink } from 'react-router-dom'
// // import { navigate } from '@reach/router'

// const Link = ({ Class, Content, to, onClick }) => {
//   // const { history } = useContext(LinkContext)
//   let handler = () => console.log('Link')
//   let handle = onClick ?? handler
//   let link = to ?? ''
//   return (
//     <NavLink
//       className={'text-decoration-none ' + Class}
//       to={link}
//       onClick={handle}>
//       {Content}
//     </NavLink>
//   )
// }

// export default Link
// import { Form, Button } from 'react-bootstrap'
// import LinkContext from '../context/LinkContext'
// import { useContext } from 'react'
// import { navigate } from '@reach/router'

// const Link = ({ Class, Content, to }) => {
//   const { history } = useContext(LinkContext)

//   let handler = () => console.log('Link')
//   let handle = history ? () => history.push(to) : handler
//   return (
//     <Button
//       variant='default'
//       type='submit'
//       className={'text-decoration-none ' + Class}
//       onClick={handle}>
//       {Content}
//     </Button>
//   )
// }

// export default Link
