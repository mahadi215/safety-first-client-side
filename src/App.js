
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Routes';
import { Provider } from 'react-redux';
import store from './redux/store';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div>
       <Toaster 
          position="top-center"
          // reverseOrder={}
        />
      <Provider store={store}>
        <RouterProvider router={router}>
        </RouterProvider>
      </Provider>
    </div>
  );
}

export default App;
