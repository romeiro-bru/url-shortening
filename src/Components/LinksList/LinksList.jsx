import { useState } from 'react';
import './style.scss';

export function LinksList({ list }) {
  const [isCopied, setIsCopied] = useState(false);


  const CopyLink = (item) => {
    navigator.clipboard.writeText(item.short_link)
    setIsCopied(true)
  }
  return (
    <section className="shortened-links-list">
      <ul>
        {list !== undefined && list.map((item, i) => (
          <li key={i}>
            <div className="original-link">{item.original_link}</div>

            <div className="short-link" >
              {item.short_link}
            </div>

            <button name={item.code} onClick={() => CopyLink(item)}
              style={{
                backgroundColor: isCopied ? "var(--secondary-color)" : ""
              }}
            >
              <span>{isCopied ? "Copied!" : "Copy"}</span>
            </button>

          </li>
        ))}
      </ul>
    </section>
  )
}
