import { TimerIcon } from 'lucide-react';
import { Heading } from './components/Heading';

import './styles/global.css'
import './styles/theme.css'

export function App() {
    return ( 
    <>
      <Heading>
        Olá mundo!
        <button>
            <TimerIcon />
        </button>
      </Heading>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        Culpa commodi sunt porro fuga aliquam hic dicta ullam sed autem sapiente inventore id, magnam nostrum minima dolor soluta cum! 
        Aspernatur, maxime.
      </p>
    </>
    );
}