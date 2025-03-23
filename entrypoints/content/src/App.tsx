import type { FC } from 'react';

const isDev = import.meta.env.MODE === 'development'

const App: FC = () => {
  return (
    <div>
      App
      {isDev && <span>  --DEV</span>}
    </div>
  );
};

export default App;