import ButtonText from '../../components/ButtonText'
import './index.scss'

const NotFoundRoute = () => {
  return (
    <div className='notfound'>
      <h2>404 Not Found</h2>
      <ButtonText type='route-link' to='/'>Go Back to Home</ButtonText>
    </div>
  )
}

export default NotFoundRoute
