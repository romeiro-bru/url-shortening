import { useState, useEffect } from 'react';
import axios from 'axios';
import './style.scss';

const endpoint = 'https://api.shrtco.de/v2'

export function Form({ shortened, setShortened, list, setList, input, setInput }) {
  const [warningMessage, setWarningMessage] = useState(true)

  useEffect(() => {
    input && setList([...list, shortened].reverse());
  }, [shortened])

  const handleSubmit = (e) => {
    e.preventDefault()
    const shortenLink = async () => {
      try {
        const response = await axios.get(`${endpoint}/shorten?url=${input}`)
        setShortened(response.data.result)
        setWarningMessage(response.data.ok)
      } catch (error) {
        console.log(error)
        setWarningMessage(false)
      }
    }
    shortenLink()
  }

  return (
    <form onSubmit={handleSubmit} className="input-box" id="shorten-it">
      <input value={input}
        onChange={(e) => setInput(e.target.value)} type="text"
        className={warningMessage === false ? "warning" : ""}
        placeholder="Shorten a link here..." />
      <button type="submit">Shorten It!</button>
      <p className="form-message"
        style={{ visibility: warningMessage === true ? "hidden" : "visible" }}
      >Please add a link</p>
    </form>
  )
}