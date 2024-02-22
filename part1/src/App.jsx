import Mensaje from "./titulo"

const App = () => {

  return (
    <div>
      <Mensaje color='red' message='Estamos trabajando' />
      <Mensaje color='green' message='En un curso' />
      <Mensaje color='yellow' message='De React' />
    </div>
  )
}

export default App