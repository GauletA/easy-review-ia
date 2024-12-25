import { ChangeEvent, useState } from 'react'
import axiosGemini from './api/config.axios';
import Input from './components/ui/Input';
import Skeleton from './components/ui/Skeleton';

function App() {
  const [geminiData, setGeminiData] = useState<string | undefined>(undefined)
  const [search, setSearch] = useState<string>('')
  const [loader, setLoader] = useState(false)



  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
      setSearch(event.target.value)
  }

 const handleSubmit = () => {
  console.log(search);
  if (search && search !== '')
    setLoader(true)
    axiosGemini.get('/api', {
      params: {
        text: search,
      }
    })
    .then(function (response) {
      // en cas de réussite de la requête
      console.log("response.data: ", response.data);
      const respText = response.data?.response?.candidates?.[0]?.content?.parts?.[0]?.text
      console.log("respText:",respText);
      
      if (respText) {
        setGeminiData(respText)
        setLoader(false)
      }

    }).catch(err => {
      console.log(err);
      setLoader(false)
    })
}

  return (
      <div className='flex flex-col gap-4 px-6'>
        <div className='flex justify-center'>
          <div className='flex gap-2 w-80'>
            <Input className='font-light' type="text" placeholder="Demandez à Gemini" onChange={handleOnChange}  />
            <button className='hover_button font-light border-1 ' onClick={handleSubmit}>send</button>
          </div>
        </div>

        {loader ? <div className='card p-5'>
            <div className="  grid grid-cols-3 gap-4">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 col-span-2" />
              <Skeleton className="h-4 col-span-2" />
              <Skeleton className="h-4 col-span-1" />
              <Skeleton className="h-4 col-span-1" />
              <Skeleton className="h-4 col-span-2" />
            </div>
          </div> : geminiData && <div className='card p-5'>{geminiData}</div>
             

        }

      </div>
  )
}

export default App
