import Meta from './components/Meta'
import Hero from './components/Hero'

export default function App() {
  return (
    <div className="App">
      <Meta
        title={'NKJV - The New King Joon Version'}
        description={'descriptions'}
        url={'https://newkingjoonversion.com'}
      />
      <Hero />
    </div>
  )
}
