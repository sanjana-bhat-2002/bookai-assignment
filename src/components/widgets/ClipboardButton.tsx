import { Check, Clipboard } from 'lucide-react';
import { useState } from 'react'


interface ClipboardProps {
    codeString: string;
}

const ClipboardButton = ({ codeString }: ClipboardProps) => {
    const [copy, setCopy] = useState(false);

  return (
    <div>
        {
          copy ?
          <button className='py-1 inline-flex items-center gap-1'>
            <span>
          <Check className='w-4 h-4' color='#3aaf23'/>
          
          </span>
          Copied!
          
        </button> : 
        <button className='py-1 inline-flex items-center gap-1' onClick={() => {
          navigator.clipboard.writeText(codeString)
          setCopy(true)
          setTimeout(() => {
            setCopy(false)
          }, 3000)
        }}>
          <span>
        <Clipboard className='w-4 h-4'/>
        
        </span>
        Copy
        
      </button>
        }
    </div>
  )
}

export default ClipboardButton