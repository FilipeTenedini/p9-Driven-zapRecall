import PropTypes from 'prop-types';
import { ResultArea, IconsArea, Msg } from './style';
import party from '../../assets/party.png';
import sad from '../../assets/sad.png';
export const Footer = ({correctsQt, doubtsQt, errorsQt, completeds}) => {
    const itemOk = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIJSURBVHgBrVRBctNAEJxZuSpXP8HcCd4Cc5dsOMf+gfyD8ALsFwReEOcFESeqgETmRmEFNoY7+gHOPd7JzMZKKbYU2Ur64t2Z3faot2cQHsDzrx1fIfVRwQFvmwDYXKUMEJmlxZO/b5Np2X0sI/U8OuZ0CypBqSUa/+n9mlSSvzjrHCHCIewIIvgw7yXvSsnb552Yf3yoj+llNwmyjcoWUvEjiQX+isfBVb5/9jJUqI7hiYBLCAw/tKtcIb6Helgg0oCIPuaD5MzAvOKM7VxRUKFVQxNcRLz6v5ZpabEx+ziEGkCCsXnzM9JftGZ3jdbzVlG/gQrbsCOQZTC9i5H+rFvU8E4LzyAciOYadgIaJj50xHteXC4pNlUZAQGeFMRTRG8gK9prVHWwI19sUFg7nndnoeiaC7MzvMAEP1L2srjLhwoo7tur9SApOJLPNr1klNmMNRxkxEUPWACjCCDajKPTU8e6OWd92XJMnEz3v73qb0ks1RgUP5IHcdm/I16zFGaxesDfubFbwQ2Ba//2+et/LEar8BTRxBJ8UizV9s2G6WV39sy5BZc0LD+HIXfa6S5dnBnBkcuQWZ8PdXHbYLOJW+cTj53nbI7v827iZ/t7TSSDvu4XSMV54g1ygbMe4VAeBbajTcUZMhI2Mg9d03HHt4QhguX5czfguKPpikhFSlEk/i+7fwMWytdD8qRWwwAAAABJRU5ErkJggg=='
    const itemDoubt = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAH4SURBVHgBpVXRcdpAEH17ePxNOlD+MpPYgQqCKzAdBAqwMRUkVCAgBVjugA4gFaCYFKB0gP/yI23eSQjHI51O2G9GiNPtvl3t7T4JGqDhpwEMhoC55rIL4ZVvIIZojFQfZPp74/IXN6m5524AHxQJMp3JdBd5yXV+EcLIHU6GzuV2N3WS6+Jyyyc9vBYsl0we++XSPMdlxs3Ee+byi9cfpwX9dUme49IShxcjdOTe4ZJAzFhu4s0xkbAXoJOt+Teo9UizK3vQZ0X+8s1JnBoaxgkTGNKux8NLuI4YoM8A29oAthmA95J3RsesHeRTuX2cVw9ZNzy8K11e2mehK3tDpxGc0L2GH4Jq98igINDE6WrMkGWRz04D8BzM+b4aE4v83pHA7Ypr4229ciqfiWdst7v8jRSTBs/uGU6CjmWyi4pSna89E9y1fb5HK0jEQ4x08fEribdtpMGSP6EVsp/FvfO9UqraXBAb1m2FdviS93obMbNQIXmWtSSXYcMU15jLgznoceI1Tk2fA/XODhD8SKxcFMKVZmO//d/ipuKvN3Rmf4+SS7mdc+XuWz28na/mHDA7By/IDwHepufsELmp0fN8zwp9Odqnwmb8H3ERq85uSX1HLsMB/KjofSP5MciP3oCtOmJbsVRaCpz9Ij1BdUXlW9WRlvgHFJK5jCDJmX4AAAAASUVORK5CYII='
    const itemError = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFrSURBVHgBrZWBccIwDEXlTJAR0gmaEZIJSDZINigT9JiAZoKWCcIG0A28ARmhnYBKjtS6HJYD+N8JX3z2ky1LwoCic1lWODRoK7ScjWTZdsbaY2i/UaDvaAXENaFt0MlHFI7gLQ4vcLve0ME6CEfwAYcK7tcRHdTykXng7YNgUsUcJ8PgDuYYp1JNDy0nf4W0cgc1nBmHwKKeR7pq7s1/obUwZ1PoxjWdvIOwJk6xmoECrrX8ZjUEf1YWjHizEkGWHUwMtjQP841CWlFYzqBLTmplgsEUylzbl0FcBBgv5kbQwW5fBn+xDJ4A5sfz1S7Y54roOwL+jTHa6eINNAeW4Htlwdp7PIpxQaPnoH0EDl4dSIxzdtCAHvedlP8JlrXXpaL6eJJs6SGtNvTj4FxtA6TRIH8cqfv5J4Ir+fhXRNzo773B4IMd79oq7u/UhguIa0LrrzUyo+3iNOzQKM+lwVHhUOFRCu+17vgD6dGNVn3jh2QAAAAASUVORK5CYII='
    
    
    const qt = correctsQt + doubtsQt + errorsQt 
    return (
      <ResultArea qt={qt} data-test="footer">
        {qt === 8 && 
                <Msg data-test="finish-text">
                {errorsQt === 0
                  ? <>
                      <img src={party} /> <span>Parabéns!</span> <br />
                      Você não esqueceu de nenhum flashcard!
                    </>
                  : <>
                      <img src={sad} /> <span>Putz...</span> <br />
                      Ainda faltam alguns...
                      Mas não desanime!
                    </>
                }
              </Msg>
        }

        <p>{qt} / 8  concluídos.</p>
        <IconsArea qt={qt}>
          {completeds.map((item, index)=>(
            <img src={item} key={index} data-test={item === itemOk ? "zap-icon" : item === itemDoubt  ? "partial-icon" : item ===  itemError ? "no-icon" : "play-btn"} />
          ))}
        </IconsArea>
      </ResultArea>
    );
  }

Footer.propTypes = {
  corrects: PropTypes.number,
  doubts: PropTypes.number,
  errors: PropTypes.number
}