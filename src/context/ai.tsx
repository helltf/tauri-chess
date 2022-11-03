import { Accessor, createContext, createSignal, useContext } from 'solid-js'

const AiContext = createContext()

export function AiProvider(props) {
  const [isAi, setIsAi] = createSignal(false)
  const value = [isAi, setIsAi]

  return <AiContext.Provider value={value}>{props.children}</AiContext.Provider>
}

export function useAi() {
  return useContext(AiContext)
}
