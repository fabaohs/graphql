import { gql, useQuery } from "@apollo/client"


const ALLUSERS = gql`
  query{
    AllUsers{
      name
    }
  }
`

interface iUser {
  name: string
}

function App() {

  const data = useQuery(ALLUSERS).data

  return (
    <div>

      {data.loading === false && data.map((user: iUser) => {
        return (
          <p>{user.name}</p>
        )
      })}

    </div>
  )
}

export default App
