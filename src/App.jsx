import UserContextProvider from "./context/UserContextProvider"
import Login from "./components/Login"
import Profile from "./components/Profile"

function App() {

  return (
    <UserContextProvider>
      <Login />
      <Profile/>
    </UserContextProvider>

    // <UserContext.Provider>
    //   <h1>Hello</h1>
    // </UserContext.Provider>
  )
}

export default App
