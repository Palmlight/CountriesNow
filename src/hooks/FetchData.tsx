import { useEffect, useReducer } from "react"

const initialState = {
  status: "idle",
  error: null,
  data: []
}

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "FETCHING":
      return { ...initialState, status: "fetching" }
    case "FETCHED":
      return { ...initialState, status: "fetched", data: action.payload }
    case "FETCH_ERROR":
      return { ...initialState, status: "error", error: action.payload }
    default:
      return state
  }
}

const useFetch = (query: string = "https://restcountries.eu/rest/v2/all") => {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    let cancelRequest = false

    if (!query) return

    const fetchData = () => {
      dispatch({ type: "FETCHING" })

      fetch(query)
        .then(res => res.json())
        .then(res => {
          if (cancelRequest) return
          dispatch({ type: "FETCHED", payload: res })
        })
        .catch(error => {
          if (cancelRequest) return
          dispatch({ type: "FETCH_ERROR", payload: error.message })
        })
    }

    fetchData()
  }, [query])

  return [state]
}

export default useFetch
