import Classes from "./classes"
import { ApolloProvider } from "@apollo/client"
import { client } from "../lib/apollo"

import '../styles/global.css'


function App() {
  return (
    <ApolloProvider client={client}>
      <Classes />
    </ApolloProvider>
  )
}
export default App
